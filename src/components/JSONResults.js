import styles from "../../styles/Home.module.css";

/**
allWinners data shape
{
  [state]: {
    winner: "Biden" | "Trump" | ...,
    resultNow: "1604003431", // string unix time that winner was called
    resultBlock: "11153856", // string etherum block where call was mined in
  }
}
*/

export const JSONResults = (
  { environment, allWinners } /* mainnet or kovan */
) => {
  // filter out states not yet called
  const nonEmptyWinners = Object.entries(allWinners)
    .filter(([key, value]) => {
      return value.winner !== "";
    })
    .reduce((acc, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {});

  const calledStatesCount = Object.entries(allWinners).filter(
    ([state, winner]) => winner.winner !== "" && state !== "TEST"
  ).length;

  return (
    <div>
      <p className={styles.description}>
        {environment === "kovan" && (
          <>
            <img
              src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/warning-sign_26a0.png"
              height="30px"
              width="30px"
              alt="test"
            />{" "}
            This is not real election data, this is for developer testing only.{" "}
            <img
              src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/warning-sign_26a0.png"
              height="30px"
              width="30px"
              alt="test"
            />
            <br />
          </>
        )}
        Associated Press has called {calledStatesCount} out of 52 states. (50
        states + D.C. + US)
      </p>
      <pre className={styles.description} style={{ textAlign: "left" }}>
        <code className={styles.code}>
          {JSON.stringify(nonEmptyWinners, null, 4)}
        </code>
      </pre>
    </div>
  );
};
