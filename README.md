RM3

About

This project is built around two core ideas.

This project is built around two core ideas.

The first idea is a general purpose tool that solves a difficult problem for dapp developers wherein they are either required to maintain a server for keeping their API keys like NFTStorage, Graph, Covalent, Infura, etc. or expose them on the frontend. The role of the server usually is just maintaining the server which is expensive in itself and also, even if these services have a generous free tier, it can be difficult to manage the quotas if users keep spamming. Exposing the keys on the frontend makes them vulnerable to getting stolen. RM3 introduces the BYOS protocol where users of a Dapp have to supply their own API keys to these services which are linked to a DID. This is a one time activity and these API keys can then be used across Dapps. This improves the balance in terms of fair usage where each user has to stay within their own quota and the Dapp developer does not have to maintain servers just to hold secrets.

The second idea is a serverless Web3 CRM that also demonstrates the power of BYOS protocol. Web2 CRMs for web3 are generally closed tools built around data privacy infringement and spamming. RM3 is a customizable tool meant for the entire community where community members can host dashboards, find and list other community members through subgraph querying, sort/filter/visualize the results, view web3 activities for a user, create segments, create notification templates, talk to community members through EPNS and XMTP and publish the entire setup through IPFS and NFTs on L2 chains for the entire community to use and improve upon.

The second idea is a serverless Web3 CRM that also demonstrates the power of BYOS protocol. Web2 CRMs for web3 are generally closed tools built around data privacy infringement and spamming. RM3 is a customizable tool meant for the entire community where community members can host dashboards, find and list community members through subgraph querying, sort/filter/visualize the results, view web3 activities for a user, create segments, create notification templates and publish the entire setup through IPFS and NFTs on L2 chains for the entire community to use and improve upon.

Tech Stack

This project uses Ceramic DIDs to store service API keys which they can use across Web3 after just a single configuration. The RM3 frontend integrates with the Self.ID sdk to pull the required service API keys to function. If not present already, RM3 frontend provides a way for the user to create it. This allows RM3 to work with The Graph, Covalent, NFTPort, NFTStorage APIs without having a server side. This is also a general purpose library which other Dapp developers can use. RM3 uses The Graph protocol to let users query for the relevant data. This data is then automatically transformed into tables which can be sorted, filtered on, visualized, grouped by, pivoted on. The tables hold intelligence to identify eth addresses and allow users to create segments. The user can then send EPNS notifications to the segment. Individual communication happens through XMTP. Also, each users data is enriched with ENS details. The entire setup can be published in IPFS through nft.storage. This can then be added to the collections which have been deployed on Polygon, Optimism and Aurora.
