import axios from 'axios';
import { useEffect, useState } from 'react';

export default function GoodFirstIssue() {
  const [govData, setGovData] = useState(null);
  const [govUiData, setGovUiData] = useState(null);
  const [govDeployerData, setGovDeployerData] = useState(null);
  const [anotherStarData, setAnotherStarData] = useState(null);
  const [gcfaContractsData, setgcfaContractsData] = useState(null);
  const [gcfaUiData, setgcfaUiData] = useState(null);
  const [govDocsData, setgovDocs] = useState(null);

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

    const fetchAnotherStarIssues = async () => {
        try {
            const response = await axios.get('https://api.github.com/repos/w3hc/another-star/issues?labels=good%20first%20issue');
            setAnotherStarData(response.data);
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la requête API :', error);
        }
    };

    const fetchGcfaContractsIssues = async () => {
        try {
            const response = await axios.get('https://api.github.com/repos/w3hc/gcfa-contracts/issues?labels=good%20first%20issue');
            setgcfaContractsData(response.data);
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la requête API :', error);
        }
    };

    const fetchGcfaUiIssues = async () => {
        try {
            const response = await axios.get('https://api.github.com/repos/w3hc/gcfa-ui/issues?labels=good%20first%20issue');
            setgcfaUiData(response.data);
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la requête API :', error);
        }
    };

    const fetchGovDocsIssues = async () => {
        try {
            const response = await axios.get('https://api.github.com/repos/w3hc/gov-docs/issues?labels=good%20first%20issue');
            setgovDocs(response.data);
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la requête API :', error);
        }
    };

    fetchGovIssues();
    fetchGovUiIssues();
    fetchGovDeployerIssues();
    fetchAnotherStarIssues();
    fetchGcfaContractsIssues();
    fetchGcfaUiIssues();
    fetchGovDocsIssues();

  },[]);

  return (

    <div>
      {govData && govUiData && govDeployerData && anotherStarData && gcfaContractsData && gcfaUiData ? (
        <div>
        {
            govData.map((govIssue) => (
              <div key={govIssue.id}>
                <h1>{govIssue.title}</h1>
              </div>
            ))
        }

        {
            govUiData.map((govUiIssue) => (
                <div key={govUiIssue.id}>
                <h1>{govUiIssue.title}</h1>
                </div>
            ))
        }

        {
            govDeployerData.map((govDeployerIssue) => (
            <div key={govDeployerIssue.id}>
                <h1>{govDeployerIssue.title}</h1>
            </div>
            ))
        }

        {
            anotherStarData.map((anotherStartIssue) => (
                <div key={anotherStartIssue.id}>
                    <h1>{anotherStartIssue.title}</h1>
                </div>
            ))
        }

        {
            gcfaContractsData.map((gcfaContractsIssue) => (
                <div key={gcfaContractsIssue.id}>
                    <h1>{gcfaContractsIssue.title}</h1>
                </div>
            ))
        }

        {
            gcfaUiData.map((gcfaUiIssue) => (
                <div key={gcfaUiIssue.id}>
                    <h1>{gcfaUiIssue.title}</h1>
                </div>
            ))
        }

        {
            govDocsData.map((govDocsIssue) => (
                <div key={govDocsIssue.id}>
                    <h1>{govDocsIssue.title}</h1>
                </div>
            ))
        }

        </div>
      ) : (
        <p>Chargement des issues...</p>
      )}
    </div>
  );
}
