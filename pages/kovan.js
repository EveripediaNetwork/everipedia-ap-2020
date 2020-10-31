import MissionControl from "../src/components/MissionControl";
import { allStates } from "../src/all-states";
import { kovanContract } from "../src/kovan/election-contract";

export async function getServerSideProps() {
  const allWinners = {};
  const fetchAllStates = allStates.map((state) => {
    return kovanContract.methods
      .presidentialWinners(state)
      .call()
      .then((winner) => {
        allWinners[state] = {
          winner: winner.winner,
          resultNow: winner.resultNow,
          resultBlock: winner.resultBlock,
        };
      });
  });

  await Promise.all(fetchAllStates);
  return {
    props: { allWinners }, // will be passed to the page component as props
  };
}

const Kovan = ({ allWinners }) => (
  <MissionControl environment="kovan" allWinners={allWinners} />
);

export default Kovan;
