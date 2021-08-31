    <script>
            // 必須先引用 'vue' , 再引用 'vue-router'
            import Vue from 'vue'
            import VueRouter from 'vue-router'

            import About from './About'
            import Products from './Products'

            import AboutHome from './AboutHome'
            import AboutYou from './AboutYou'
            import AboutMe from './AboutMe'

            Vue.use(VueRouter)

            export default {
                router: new VueRouter({    //  router: new VueRouter({}), => """是逗號喔"""
                        mode: 'history',       //hash by default (路徑預設有 '#'), 去除 #
                        routes: [  //要在哪裡 render 這個組件？
                            //設定固定路徑: http://localhost:8080/about 和 http://localhost:8080/products
                            //並顯示固定的組件: component:About 和 component:Products
                        // {path: '/about', component: About},
                        // routes: [] 預設陣列 , 之內 放"物件" ===>  routes: [ {...[]} , {...[]} ]
                        {   
                            path: '/about',  
                            component: About,
                            children: [
                                {path: '', component: AboutHome},
                                {path: 'you', component: AboutYou},
                                {path: 'me', component: AboutMe},
                                // path: ''    , 表示路徑 => /about (本頁)
                                // path: 'you' , 表示路徑 => /about/you
                                // path: 'me'  , 表示路徑 => /about/me
                            ],
                            
                        },


                        {
                            // path: '/products',
                            path: '/products/:item?', // 自訂名稱:item / id / sn ...
                            component: Products
                            // :item?(自訂名稱) , 代表後面還有東西 , ? 代表後面路徑可有可無
                        },

                    ],
                }),
            
            }
    </script>

    <template>
        <div>
            <p>
                <!-- 類似 <a href=""></a> -->
                <!-- to="/about" , to="/products"  連結的路徑 -->
                <router-link to="/about"> About </router-link> | <router-link to="/products"> Products </router-link>
                
            </p>
            <hr>
            <h1>12345  router  test</h1>
            <!-- 指定網頁內容,要出現的位子 -->
            <router-view></router-view> 
        </div>
    </template>

    <style scoped>
        h1{
            color:red;
        }
    </style>