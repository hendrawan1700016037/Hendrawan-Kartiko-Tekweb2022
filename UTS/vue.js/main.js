Vue.createApp({
    data() {
      return {

        header: {
          title: "Hendrawan Kartiko",
          description:
            "Pernahkah kau penasaran tentang nilai manusia? Pagi itu, saudaraku hanya dihargai jam saku (Between Shades of Gray, Ruta Sepetys) ",
          cerita:
            "Berdasarkan KBBI, cerpen merupakan sebuah tulisan tentang kisah pendek yang isinya tak lebih dari 10 ribu kata, dan berisi tentang seorang tokoh Sementara itu, menurut Sumardjo dan Saini, cerpen adalah sebuah cerita yang tak benar-benar terjadi pada dunia nyata, ceritanya singkat, serta juga pendek.Batas isi dari cerpen ini ditujukan agar pembaca bisa menyelesaikannya dalam waktu yang singkat, yaitu sekitar 30 menit hingga 2 jam saja		",
          imageProfile:
            "img/laptop.jpg",
        },

      };
    },
    mounted:()=>{    
      axios.get("https://raw.githubusercontent.com/faridsurya/Vue-Axios-Basic/master/contents/header.json")
      .then((res)=>{
        console.log(res.data);
      })
      .catch((error)=>{
        console.log(error);
      })
    }
  }).mount("#app");