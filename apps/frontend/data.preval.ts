// data.preval.js (or data.preval.ts)
import { GetFooterQuery, GetFooterDocument, GetGlobalQuery, GetGlobalDocument, GetAlertQuery, GetAlertDocument } from 'generated/graphql';
import client from 'lib/apolloClient';

// step 1: create a data.preval.js (or data.preval.ts) file
import preval from 'next-plugin-preval';
import { fetchAPI } from 'services/api';

// step 2: write an async function that fetches your data
async function getData() {
    // Navigation requires additional configuration to use GraphQL API, so we use REST API to fetch it
    const navigationRes = await fetchAPI('/navigation/render/1', {
        type: 'tree',
      });
    
      const footerLinksRes = await fetchAPI('/navigation/render/footer', {
        type: 'tree'
      })
    
      const footerData: GetFooterQuery = (
        await client.query({ query: GetFooterDocument })
      ).data;
    
      const globalData: GetGlobalQuery = (
        await client.query({ query: GetGlobalDocument })
      ).data;
    
      const alertData: GetAlertQuery = (
        await client.query({ query: GetAlertDocument })
      ).data;

  return { global: globalData.global.data, navigationRes, footerData, footerLinksRes, alertData };
}

// step 3: export default and wrap with `preval()`
export default preval(getData());