import axios from 'axios';
import { useEffect, useState } from 'react';
import { useAccount } from 'wagmi'

export default function GoodFirstIssue() {
  const [govData, setGovData] = useState(null);
  const [govUiData, setGovUiData] = useState(null);
  const [govDeployerData, setGovDeployerData] = useState(null);

  const { isDisconnected } = useAccount()

  useEffect(() => {
    const fetchGovIssues = async () => {
      try {
        const response = await axios.get('https://api.github.com/repos/w3hc/gov/issues?labels=good%20first%20issue');
        setGovData(response.data);
      } catch (error) {
        console.error('Une erreur s\'est produite lors de la requête API :', error);
      }
    };

    const fetchGovUiIssues = async () => {
      try {
        const response = await axios.get('https://api.github.com/repos/w3hc/gov-ui/issues?labels=good%20first%20issue');
        setGovUiData(response.data);
      } catch (error) {
        console.error('Une erreur s\'est produite lors de la requête API :', error);
      }
    };

    const fetchGovDeployerIssues = async () => {
    try {
        const response = await axios.get('https://api.github.com/repos/w3hc/gov-deployer/issues?labels=good%20first%20issue');
        setGovDeployerData(response.data);
    } catch (error) {
        console.error('Une erreur s\'est produite lors de la requête API :', error);
    }
    };

    fetchGovIssues();
    fetchGovUiIssues();
    fetchGovDeployerIssues();

  },[]);

  return (

    isDisconnected ? (
        <>
          <br />
          <p>Please connect your wallet if you want to see issues.</p>
        </>
      ) : (
    <div>
        <div>
          {govData.length > 0 ? (
            govData.map((govIssue) => (
              <div key={govIssue.id}>
                <h1>{govIssue.title}</h1>
              </div>
            ))
          ) : (
            <p>Aucune données trouvé pour gov.</p>
          )}

          {govUiData.length > 0 ? (
            govUiData.map((govUiIssue) => (
              <div key={govUiIssue.id}>
                <h1>{govUiIssue.title}</h1>
              </div>
            ))
          ) : (
            <p>Aucune données trouvé pour gov-ui.</p>
          )}

          {govDeployerData.length > 0 ? (
            govDeployerData.map((govDeployerIssue) => (
              <div key={govDeployerIssue.id}>
                <h1>{govDeployerIssue.title}</h1>
              </div>
            ))
          ) : (
            <p>Aucune données trouvé pour gov-ui.</p>
          )}
        </div>
    </div>
  ));
}
