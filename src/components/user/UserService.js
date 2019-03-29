import React from "react";

const UserService = {
    get: () => {
        //Simulating user fetch
        const userPromise = new Promise((resolve,reject)=>{

            setTimeout(()=>{
                const fetchedUser = {
                    name: "Rafael Pereira",login:"rpereira"
                };
                resolve(fetchedUser);
            },Math.random() * 2000 + 1000);
        });
        return userPromise;
    }
};

export default UserService;
