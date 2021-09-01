<template>
    <div>
        <h1>[About]</h1>
        
        <router-link to="/about/you">About You</router-link> |
        <router-link to="/about/me">About Me</router-link>

        <router-view></router-view>
    </div>
</template>

<style scoped>  
    h1{
      color:maroon; 
      font:bold 40px calibri;
    }
    /* scoped 是區別  About / Products 的 h1 不會共用 css , 避免衝突 */
</style>
