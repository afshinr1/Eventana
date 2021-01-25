const initialState = {
  events: [
    {
      uuid: 1,
      description: "jaja",
      startTime: Date.now(),
      endTime: Date.now(),
      fee: 100,
      capacity: 30,
      imageUrl: "sad url",
    },
    {
        uuid: 2,
        description: "jaja2",
        startTime: Date.now(),
        endTime: Date.now(),
        fee: 100,
        capacity: 30,
        imageUrl: "sad url 5",
      },  {
        uuid: 3,
        description: "jaja3",
        startTime: Date.now(),
        endTime: Date.now(),
        fee: 150,
        capacity: 50,
        imageUrl: "sad url3",
      },
  ],
};
export const EventsReducer = (state = initialState, action) => {
  return state;
};
