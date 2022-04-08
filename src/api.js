import axios from "axios";

const COLLECTIONS_ENDPOINT =
  "https://main-bvxea6i-7ofpvawtduyy4.us-4.platformsh.site/graphql";

const DGRAPH_ENDPOINT =
  "https://nameless-brook-330087.eu-central-1.aws.cloud.dgraph.io/graphql";

const getLatestHarvestDataQuery = `
{
  querydataExtractorSummary(order: {desc: dateProcessed}, first: 1) {
    coboatVersion
    dateProcessed
    dateRetrieved
    mediaRecords
    objectMediaLinks
    objectRecords
    personMediaLinks
    personRecords
    vesselMediaLinks
    vesselRecords
    id
  }
}`;
const getHarvestDataQuery = `
{
  querydataExtractorSummary() {
    coboatVersion
    dateProcessed
    dateRetrieved
    mediaRecords
    objectMediaLinks
    objectRecords
    personMediaLinks
    personRecords
    vesselMediaLinks
    vesselRecords
    id
  }
}`;

const getCollectionObjectQuery = (objectNumber) => {
  return `
    {
        collectionObject (objectNumber: "${objectNumber}") {
            title
            description
            additionalInformation
            classification
            objectNumber
            type
            creditLine
            itemCount
            materials
            measurements
            revisionDate
            dateMade
            weight
            siteLocation
            placeMade
            productionPhase
            copyrightRestrictions
            totalRuntime
            videoFormat
            encapsulation
            soundtrackType
            imageFormat
            photoMedium
            scale
            planType
            majorCollections
            namedCollections
            nomenclature
            media {
                id
                type
                caption
                copyrightRestrictions
                creditLine
                file {
                    filename
                    mimeType
                    publicUrl
                }
            }
            constituents {
                id
                name
                individual
                briefBiography
                website
                biographyFile {
                    contents
                    size
       }
                media {
                    id
                    type
                    caption
                    copyrightRestrictions
                    creditLine
                        file {
                            filename
                            mimeType
                            publicUrl
                        }
                }
        }
    }
}`;
};

export default {
  getLatestHarvestData() {
    return axios
      .post(DGRAPH_ENDPOINT, {
        query: getLatestHarvestDataQuery,
      })
      .then((response) => {
        // console.log(response.data.data.querydataExtractorSummary[0]);
        return response.data.data.querydataExtractorSummary[0];
      });
  },
  getHarvestData() {
    return axios
      .post(DGRAPH_ENDPOINT, {
        query: getHarvestDataQuery,
      })
      .then((response) => {
        // this.harvestData = response.data.data.querydataExtractorSummary[0];
        console.log(response.data.data.querydataExtractorSummary);
        return response.data.data.querydataExtractorSummary;
      });
  },
  getCollectionObject(objectNumber) {
    return axios
      .post(COLLECTIONS_ENDPOINT, {
        query: getCollectionObjectQuery(objectNumber),
      })
      .then((response) => {
        // this.harvestData = response.data.data.querydataExtractorSummary[0];
        console.log(response.data);
        return response.data;
      });
  },
};
