import { createClient } from 'next-sanity';

const client = createClient({
  projectId: '5omh76eg',
  dataset: 'production',
  apiVersion: '2023-04-05',
  useCdn: false,
});

export default client;
