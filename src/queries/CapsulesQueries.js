export const CapsulesQueries = {
    getCapsules: `
        query getCapsules($limit: Int, $order: String) {
            capsules(limit: $limit, order: $order) {
                id
                missions {
                    flight
                    name
                }
            }
        }
    `,
    getOneCapsule: `
        query getCapsule($capsuleId: ID!) {
            capsule(id: $capsuleId) {
                status
                landings
                missions {
                    flight
                    name
                }
                dragon {
                    description
                    name
                }
            }
        }
    `
}