import { AJAXRequest } from "../tools/AJAXRequest";
import { CapsulesQueries } from '../queries/CapsulesQueries';

export const CapsulesAJAXRequest = {
    getCapsules: async (variablesObj) => {
        const { data } = await AJAXRequest({
            query: CapsulesQueries.getCapsules,
            variables: { ...variablesObj }

        });
        return data.data.capsules;
    },
    getOneCapsule: async (capsuleIdParam) => {
        const { data } = await AJAXRequest({
            query: CapsulesQueries.getOneCapsule,
            variables: {
                capsuleId: capsuleIdParam
            }
        });
        return data.data.capsule;
    }
}