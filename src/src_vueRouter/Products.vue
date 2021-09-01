<template>
    <div>
        <h1> [Products] </h1>
        <!-- <h3> {{$route.params.item}} </h3> -->
        <!-- 路徑.參數.自訂變數名稱              -->

        <!-- 要用 computed 處理 (不傳參數)-->
        <h3> {{itemCall}} </h3>
    </div>
</template>
<script>
        const items = {
            10: 'Hat',
            20: 'Shoes',
            30: 'T-shirt',
            40: 'Mac Pro',
            50: 'iPad Air',
            60: 'iPhone',
            70: 'Nothing',
        };
        export default {
            computed: {
                itemCall(){
                    return items[this.$route.params.item];  // http://localhost:8081/products/50

                    // 查詢 query
                    // return items[this.$route.query.item];  // http://localhost:8081/products?item=10
                    // 物件陣列表示法  items[10] items[20] items[30] items[40] ...參考 0602 補充obj.js檔
                    // 因為 屬性是 " 數字 " , 所以用陣列表示法 items[];
                },
            },
        }
</script>

<style scoped>
    h1{
        color: rgb(55, 241, 55);
        font: bold 40px Calibri;
    }
</style>
