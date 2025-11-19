var User = {
 _id : "3456fbgh4t5y6fghr456gbh",
  Name: "Hassaan",
  UserName: "hassaanhmk",
  Email: "hassaan@gmail.com",
  Password: "hassaan",
  ImageUrl:
    "https://i.pinimg.com/736x/ec/8e/96/ec8e96b2bbd604e7d4f296ed22ecb13c.jpg",
  NumberOfFollower: 32,
  NumberOfFollowing: 15,
  Bio: "I'm Hassan haider from Lalian city ❤",
  Location: "Lalian, Pakistan",
  JoinDate: "2024-07-15",
  IsPro: true,
  VerifiedUser: true,
  CreatedPost: [],
  SavedPost: [],
  Following: [],
  Follower: [],
  AccountStatus: "active", // ✅ could be: 'active' | 'banned' | 'suspended'
  Notifications: [
    {
      id: 1,
      description: "You have received a new message from John.",
      time: "2025-10-31T13:10:00Z",
      IsReaded: false,
    },
    {
      id: 2,
      description: "Ali liked your recent post.",
      time: "2025-10-31T13:10:00Z",
      IsReaded: false,
    },
  ],
};

export default User;
