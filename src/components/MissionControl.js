import Head from "next/head";
import Link from "next/link";

import { JSONResults } from "./JSONResults";
import styles from "../../styles/Home.module.css";

const title = "Everipedia + AP Election Mission Control";
const description =
  "The Associated Press teams up with Everipedia to publish election results on the blockchain. Join us November 3rd!";
export default function MissionControl(
  { environment, allWinners } /* mainnet or kovan */
) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="twitter:title" content={title} />
        <meta name="description" content={description} />
        <link
          rel="icon"
          href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/flag-for-united-states_1f1fa-1f1f8.png"
        />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image"
          content="https://everipedia-ap-2020.vercel.app/kovan-screenshot.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{" "}
          <a href="https://docs.everipedia.org" target="_blank">
            AP Election Mission Control
          </a>
        </h1>
        <p className={styles.description}>
          You are viewing{" "}
          <b style={{ textDecoration: "underline" }}>{environment}</b>, click
          <span style={{ backgroundColor: "#FFFF00" }}>
            <Link href={environment === "mainnet" ? "/kovan" : "/"}>
              <a style={{ textDecoration: "underline", fontWeight: "bold" }}>
                {" "}
                here to view{" "}
                {environment === "mainnet" ? "kovan testnet" : "mainnet"}
              </a>
            </Link>
          </span>
        </p>

        <JSONResults environment={environment} allWinners={allWinners} />

        <br />
        <hr style={{ width: "100%" }} />
        <br />
        <h1 className={styles.title}>Developer Docs</h1>
        <div className={styles.grid}>
          <a
            href="https://docs.everipedia.org/eth/fetch-election-calls-with-solidity"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>Fetch election calls with Solidity &rarr;</h3>
            <p>
              For Ethereum developers using the Solidity smart-contract language
            </p>
          </a>

          <a
            href="https://docs.everipedia.org/eth/fetch-election-calls-with-web3"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>Fetch election calls with web3 &rarr;</h3>
            <p>For Ethereum developers using Javascript (like this web app)</p>
          </a>

          <a
            href="https://docs.everipedia.org/eosio/mainnet"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>EOS Contract Documentation &rarr;</h3>
            <p>For EOS developers</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://everipedia.org" target="_blank">
          Powered by Everipedia and Chainlink
        </a>
      </footer>
    </div>
  );
}
