db.users.insertOne({
    _id: 2,
    name: "User 2",
    status: "active",
});

db.users.find({});

db.users.updateOne(
    {
        _id: 2,
    },
    {
        $set: {
            status: "inactive",
        },
    }
);

db.users.insertMany([
    {
        _id: 3,
        name: "User 3",
        status: "active",
    },
    {
        _id: 4,
        name: "User 4",
        status: "active",
    },
]);
