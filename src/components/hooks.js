import { useEffect, useState } from "react";
import { allStates } from "../all-states";

import { mainnetContract } from "../mainnet/election-contract";
import { kovanContract } from "../kovan/election-contract";

export const usePresidentialWinners = (environment /* mainnet or kovan */) => {
  const contract = environment === "mainnet" ? mainnetContract : kovanContract;
  const [winners, setWinners] = useState({});
  const setWinner = (state, res) => {
    setWinners((previousWinners) => ({ ...previousWinners, [state]: res }));
  };

  useEffect(() => {
    (async () => {
      const fetchAllStates = allStates.map((state) => {
        return contract.methods
          .presidentialWinners(state)
          .call()
          .then((winner) => {
            const winnerContent = {
              winner: winner.winner,
              resultNow: winner.resultNow,
              resultBlock: winner.resultBlock,
            };
            setWinner(state, winnerContent);
          });
      });

      Promise.all(fetchAllStates);
    })();
  }, []);

  return winners;
};
