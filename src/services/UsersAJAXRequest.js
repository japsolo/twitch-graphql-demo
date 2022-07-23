import { AJAXRequest } from "../tools/AJAXRequest";
import { UsersQueries } from '../queries/UsersQueries';

export const UsersAJAXRequest = {
    insertUsers: async (users) => {
        const { data } = await AJAXRequest({
            query: UsersQueries.insertUsers,
            variables: {
                objects: users
            }

        });
        return data.data.insert_users;
    },
}