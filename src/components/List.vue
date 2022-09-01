<template>
    <div class="card row" :class="status">
        <!-- lado esquerdo -->
        <div class="row">
            <div class="row">
                <div>
                    <img class="img" :src="`data:img/png;base64, ${picture}`"/>
                </div>
                <div class="name row">{{name}}</div>
            </div>
        </div>

        <!-- lado direito -->
        <div class="toggle">
           <el-switch
                v-model="isActive"
                v-if="listType == 'check'"
                active-color="#00B8AD"
                inactive-color="#E86161"
                inactive-value=false
            >
            </el-switch>
            <el-input style="max-width: 4em" v-model="absenceNumber" v-else>

            </el-input>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardList',
    props: {
        id: String,
        picture: String,
        name: String,
        numberOfClasses: Number
    },
    data: function() {
        return {
            isActive: true,
            absenceNumber: 0,
            listType: this.$store.getters.listType
        }
    }
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
        flex: 0 1 auto;
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