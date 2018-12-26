
<template>
    <!-- 中转页，同一组件刷新 -->
<div>

</div>
</template>


<script>
export default {
    data(){
        return{

        }
    },
    created:function(){
        console.log( this.$route.query.product_id)
        this.$router.replace({path:'/detail/product_detailed',query:{product_id:this.$route.query.product_id}})
    },
}
</script>
