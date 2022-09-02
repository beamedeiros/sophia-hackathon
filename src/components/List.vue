<template>
    <div class="card row">
        <!-- lado esquerdo -->
        <div class="row">
            <div class="row">
                <el-icon :size="size" :color="color">
                    <User />
                </el-icon>
                <!-- <img class="img" :src="`data:img/jpg;base64, ${picture}`"/> -->
                <div class="name row">{{name}}</div>
            </div>
        </div>

        <!-- lado direito -->
        <div class="toggle">
            <div v-if="listType == 'check'">
                <el-switch
                     v-for="(attendance, index) of model"
                     :key="index"
                     v-model="model[index].value"
                     active-color="#00B8AD"
                     :active-value="0"
                     :inactive-value="1"
                     inactive-color="#E86161"
                     style="margin-left: 0.5em;"
                 >
                 </el-switch>
            </div>
            <el-input style="max-width: 4em" v-model="absenceNumber" v-else>

            </el-input>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardList',
    props: {
        id: Number,
        picture: String,
        name: String,
        numberOfClasses: Number,
        enrollment: String,
        classCodes: [Number],
        absentByDefault: Boolean
    },
    data: function() {
        return {
            isActive: true,
            absenceNumber: 0,
            listType: this.$store.getters.listType,
            periodNumberOfClasses: 0,
            model: []
        }
    },
    computed: {
        classes: function () {
            return this.listType  === 'check' ? this.numberOfClasses : this.periodNumberOfClasses
        },
    },
    created: function () {
        this.model = this.classCodes.map(classCode => {
            return {
                classCode,
                value: this.absentByDefault ? 0 : 1
            } 
        })
    },
    watch: {
        absentByDefault: function () {
            this.model = this.classCodes.map(classCode => {
            return {
                classCode,
                value: this.absentByDefault ? 0 : 1
            }
        })
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