<template>
    <div class="card row" :class="status">
        <!-- lado esquerdo -->
        <div class="row">
            <div class="row">
                <div>
                    <img class="img" :src="require(`@/assets/cat.jpg`)"/>
                </div>
                <div class="name row">{{name}}</div>
            </div>
        </div>

        <!-- lado direito -->
        <div class="toggle">
           <el-switch
                v-model="isActive"
                active-color="#00B8AD"
                inactive-color="#E86161"
                inactive-value=false
            >
            </el-switch>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardList',
    props: {
        id: String,
        picture: String,
        name: String
    },
    data: function() {
        return {
            isActive: true,
        }
    },
}
</script>

<style scoped>
    .row {
        display: flex;
        flex-direction: row;
        flex: 1 1 auto;
        margin: 2px;
        align-items: center;
    }
    .card {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 1rem;
        background-color: #fff;
    }
    .img {
        height: 50px;
        width: 50px;
        border-radius: 50%;
    }
    .name {
        margin: 1rem;
        display:flex;
        flex-direction: row;
        text-align: start;
        
    }
    .toggle {
        display: flex;
        flex-direction: row;
        align-items: flex-end;
    }
</style>