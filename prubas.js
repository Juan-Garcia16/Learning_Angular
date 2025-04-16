function ejemplo() {
    if (true) {
      var x = 10;
      let y = 20;
    }
  
    console.log(x); // ✅ Imprime 10 (var "sale" del if)
    console.log(y); // ❌ Error: y is not defined
  }

ejemplo()