const popularBooks = [
  {
    title: "Great or Nothing",
    description: "A fun story about sharing and friendship, perfect for young readers.",
    image:
      "https://i.pinimg.com/736x/b3/2e/be/b32ebe10ce8d578e219cd7d99576bb01.jpg",
  },
  {
    title: "Sarai and the meaning of awesome",
    description: "A fun story about sharing and friendship, perfect for young readers.",
    image:
      "https://i.pinimg.com/736x/86/db/9f/86db9f43060d5c3e77ef4bd444fd1393.jpg",
  },
  {
    title: "MATILDA",
    description: "A fun story about sharing and friendship, perfect for young readers.",
    image:
      "https://i.pinimg.com/736x/e2/ce/c6/e2cec62ceba3c5f74414e37dfcb1ba4f.jpg",
  },
  {
    title: "Just Harriet",
    description: "A fun story about sharing and friendship, perfect for young readers.",
    image:
      "https://i.pinimg.com/736x/05/db/a9/05dba9674f9ba27cc81681eebc910091.jpg",
  },
  {
    title: "The Art Of Running Away",
    description: "A fun story about sharing and friendship, perfect for young readers.",
    image:
      "https://i.pinimg.com/736x/b8/f5/5a/b8f55ab71bd66c5256f2c6d55965ca23.jpg",
  },
  {
    title: "Once Upon a Curfew",
    description: "A fun story about sharing and friendship, perfect for young readers.",
    image:
      "https://i.pinimg.com/736x/11/8e/dd/118edde06c66156ca315a0140a0bad6d.jpg",
  },
  {
    title: "NOISE",
    description: "A fun story about sharing and friendship, perfect for young readers.",
    image:
      "https://i.pinimg.com/736x/39/b4/29/39b4298faabb5d6e787e9e65d431b50e.jpg",
  },
  {
    title: "SARANORMAL",
    description: "A fun story about sharing and friendship, perfect for young readers.",
    image:
      "https://i.pinimg.com/736x/c7/3e/4d/c73e4d9588dfe5d56a724b9bdb9c8630.jpg",
  },
  {
    title: "THE NEW GIRL",
    description: "A fun story about sharing and friendship, perfect for young readers.",
    image:
      "https://i.pinimg.com/736x/81/89/67/8189672327978c7a5345345d0fc2c233.jpg",
  },
  {
    title: "OPPORTUNITY KNOCKS",
    description: "A fun story about sharing and friendship, perfect for young readers.",
    image:
      "https://i.pinimg.com/736x/11/0a/6f/110a6fc1514b0cb8d01e320360f47e67.jpg",
  },
  {
    title: "GREAT OF NOTHING",
    description: "A fun story about sharing and friendship, perfect for young readers.",
    image:
      "https://i.pinimg.com/736x/b3/2e/be/b32ebe10ce8d578e219cd7d99576bb01.jpg",
  },
  {
    title: "HELLO FUTURE ME",
    description: "A fun story about sharing and friendship, perfect for young readers.",
    image:
      "https://i.pinimg.com/736x/16/9c/60/169c602da750f0239c6f412815f1786a.jpg",
  },
];

let content = "";
for (let i = 0; i < popularBooks.length; i++) {
  content += `<div class="col-6 col-sm-4 col-md-3 col-lg-3 ">   
        <div class="card" style="height: 300px; overflow: hidden;">
          <img src="${popularBooks[i].image}"
               class="card-img-top mt-3"
               alt="Book1">
          <div class="card-body p-1">
            <h6 class="card-title mb-1" style="font-size: 0.9rem;">${popularBooks[i].title}</h6>
            <p class="card-text" style="font-size: 0.75rem;">${popularBooks[i].description}</p>
          </div>
        </div>
      </div>`;
}
document.getElementById("popular-books").innerHTML = content;
