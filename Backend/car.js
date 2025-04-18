const cars = [
    {
      id: 1, brand: "Toyota", model: "Camry", price: 24000, fuel: "Petrol", seats: 5,
      image: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Camry/11344/1733916451269/side-view-(left)-90.jpg"
    },
    {
      id: 2, brand: "Hyundai", model: "Verna", price: 20000, fuel: "Diesel", seats: 5,
      image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/121943/verna-exterior-right-front-three-quarter-102.jpeg?isig=0&q=80"
    },
    {
      id: 3, brand: "Honda", model: "Civic", price: 22000, fuel: "Petrol", seats: 5,
      image: "https://img.autocarindia.com/ExtraImages/20160218111012_civic_1.jpg"
    },
    {
      id: 4, brand: "Ford", model: "EcoSport", price: 18500, fuel: "Diesel", seats: 5,
      image: "https://images2.cardekho.com/images/carNewsEditorImages/20160512_180926/18537/oem-name0.jpg"
    },
    {
      id: 5, brand: "Mahindra", model: "XUV500", price: 23000, fuel: "Diesel", seats: 7,
      image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/34024/xuv500-exterior-right-front-three-quarter-3.jpeg?q=80"
    },
    {
      id: 6, brand: "Kia", model: "Seltos", price: 21000, fuel: "Petrol", seats: 5,
      image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/34024/xuv500-exterior-right-front-three-quarter-3.jpeg?q=80"
    },
    {
      id: 7, brand: "Tata", model: "Harrier", price: 22500, fuel: "Diesel", seats: 5,
      image: "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202208/untitled-5-sixteen_nine.jpg?size=948:533"
    },
    {
      id: 8, brand: "Renault", model: "Kwid", price: 9500, fuel: "Petrol", seats: 4,
      image: "https://www.cars24.com/new-cars/_next/image/?url=https%3A%2F%2Fcdn.cars24.com%2Fprod%2Fnew-car-cms%2FRenault%2FKwid%2F2024%2F04%2F09%2F0cb5ba8b-cf73-4a34-bfc5-40f47cccfb4e-Renault_Kwid_Fiery-Red.png&w=640&q=75"
    },
    {
      id: 9, brand: "Skoda", model: "Slavia", price: 21000, fuel: "Petrol", seats: 5,
      image: "https://www.cars24.com/new-cars/_next/image/?url=https%3A%2F%2Fcdn.cars24.com%2Fprod%2Fnew-car-cms%2FRenault%2FKwid%2F2024%2F04%2F09%2F0cb5ba8b-cf73-4a34-bfc5-40f47cccfb4e-Renault_Kwid_Fiery-Red.png&w=640&q=75"
    },
    {
      id: 10, brand: "Volkswagen", model: "Virtus", price: 20500, fuel: "Petrol", seats: 5,
      image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/144681/virtus-exterior-right-front-three-quarter-7.jpeg?isig=0&q=80"
    },
    {
      id: 11, brand: "Nissan", model: "Magnite", price: 15000, fuel: "Petrol", seats: 5,
      image: "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/173325/magnite-facelift-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80&q=80"
    },
    {
      id: 12, brand: "Maruti", model: "Baleno", price: 13500, fuel: "Petrol", seats: 5,
      image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/102663/baleno-exterior-right-front-three-quarter-69.jpeg?isig=0&q=80"
    },
    {
      id: 13, brand: "Hyundai", model: "i20", price: 14500, fuel: "Petrol", seats: 5,
      image: "https://imgd.aeplcdn.com/642x336/n/cw/ec/150603/i20-exterior-right-front-three-quarter-7.jpeg?isig=0&q=80"
    },
    {
      id: 14, brand: "Toyota", model: "Fortuner", price: 35000, fuel: "Diesel", seats: 7,
      image: "https://www.financialexpress.com/wp-content/uploads/2024/10/toyota-fortuner-leader-edition_20241001131301.jpg"
    },
    {
      id: 15, brand: "MG", model: "Hector", price: 25000, fuel: "Petrol", seats: 5,
      image: "https://stimg.cardekho.com/images/carexteriorimages/930x620/MG/Hector/11869/1721899015829/front-left-side-47.jpg"
    },
    {
      id: 16, brand: "Tata", model: "Nexon", price: 16000, fuel: "Petrol", seats: 5,
      image: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Tata/Nexon/9675/1743060431849/front-left-side-47.jpg"
    },
    {
      id: 17, brand: "Kia", model: "Carens", price: 23000, fuel: "Diesel", seats: 7,
      image: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Kia/Carens/10306/1739596312616/front-left-side-47.jpg"
    },
    {
      id: 18, brand: "Mahindra", model: "Thar", price: 21000, fuel: "Petrol", seats: 4,
      image: "https://www.financialexpress.com/wp-content/uploads/2022/09/mahindra-thar-updated-with-new-logo-colours-controls.jpg"
    },
    {
      id: 19, brand: "Honda", model: "City", price: 20000, fuel: "Petrol", seats: 5,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTauDWxcb1vwo3XWbocAs-rf4IfdzxGlkD_3ochFky5p8Rt84wRgIYKPIz_Gy9qbvG6m9s&usqp=CAU"
    },
    {
      id: 20, brand: "Renault", model: "Triber", price: 12000, fuel: "Petrol", seats: 7,
      image: "https://imgd.aeplcdn.com/1280x720/n/cw/ec/141119/triber-exterior-right-front-three-quarter-9.jpeg?isig=0&q=80"
    },
    {
      id: 21, brand: "Volkswagen", model: "Taigun", price: 22000, fuel: "Petrol", seats: 5,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRULfaPY50VGU6wSGySrIT00R9IAfqejVxXPZNjPcYXCqp5MrdIdIZIovLSOvIbKdHVohg&usqp=CAU"
    },
    {
      id: 22, brand: "Skoda", model: "Kushaq", price: 21500, fuel: "Petrol", seats: 5,
      image: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Skoda/Kushaq/11795/1741783334851/front-left-side-47.jpg"
    },
    {
      id: 23, brand: "Maruti", model: "Swift", price: 11000, fuel: "Petrol", seats: 5,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2uWLhCTXX016M3yHP6sVAelITNbLcbEMqW_NrBBYMk1kDP7pJUIbfVtFf5cmsCH_-AoY&usqp=CAU"
    },
    {
      id: 24, brand: "Hyundai", model: "Creta", price: 22000, fuel: "Diesel", seats: 5,
      image: "https://s3.amazonaws.com/advaithmedia/backend/storage/uploads/2022/07/17054541/Abyss-Black-2.webp"
    },
    {
      id: 25, brand: "Honda", model: "Amaze", price: 13000, fuel: "Petrol", seats: 5,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrI7pBZ8wHKFZruyFv6bzEWOYFljLbF83k1djdq3hFGRTltn12qxsvferLVlneNhFIcw&usqp=CAU"
    },
    {
      id: 26, brand: "Ford", model: "Figo", price: 11000, fuel: "Diesel", seats: 5,
      image: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Ford/Figo/7594/1627023729889/front-left-side-47.jpg"
    },
    {
      id: 27, brand: "Nissan", model: "Kicks", price: 18500, fuel: "Petrol", seats: 5,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7hJYk5uJMNM35iaPKQi_5s1Uba7NvShp6vG_pbizBJzCtZGyI9gxouLWY2KukfK4bX-U&usqp=CAU"
    },
    {
      id: 28, brand: "Tata", model: "Tiago", price: 10000, fuel: "Petrol", seats: 5,
      image: "https://imgd.aeplcdn.com/370x208/n/cw/ec/99113/tiago-nrg-exterior-right-front-three-quarter-8.jpeg?isig=0&q=80"
    },
    {
      id: 29, brand: "MG", model: "ZS EV", price: 32000, fuel: "Electric", seats: 5,
      image: "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/110437/zs-ev-exterior-right-front-three-quarter-69.jpeg?isig=0&q=80&q=80"
    },
    {
      id: 30, brand: "Mahindra", model: "Scorpio", price: 26000, fuel: "Diesel", seats: 7,
      image: "https://images.news18.com/ibnlive/uploads/2023/08/new-project-1-2-2023-08-17t130151.015.jpg"
    }
  ];
  
  export default cars;
  