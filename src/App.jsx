import React, { useEffect } from "react";

import { CapsulesAJAXRequest } from "./services/CapsulesAJAXRequest";
import { UsersAJAXRequest } from "./services/UsersAJAXRequest";

export const App = () => {
  useEffect(() => {
    (async () => {
      const usersArray = [
        { name: "John" },
        { name: "Jane" },
      ]
      const newUsers = await UsersAJAXRequest.insertUsers(usersArray);
      // console.log(newUsers);

      const allCapsules = await CapsulesAJAXRequest.getCapsules({
        limit: 5,
      });
      // console.info(allCapsules);

      const oneCapsule = await CapsulesAJAXRequest.getOneCapsule("C105");
      // console.log(oneCapsule);

      const otherCapsule = await CapsulesAJAXRequest.getOneCapsule("C112");
      // console.log(otherCapsule);
    })();
  }, []);
  return (
    <div>
      <h2>App</h2>
    </div>
  )
}
