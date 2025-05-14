<template>
    <div class="text-primary">
        <p class="font-weight-bold">Tempo restante: {{ minutes }}:{{ seconds }}</p>
    </div>
</template>

<script>
export default {
    name: "CounterMinutesSeconds",
    props: {
        timeInMinutes: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            timeInSeconds: this.timeInMinutes * 60,
            interval: null
        };
    },
    computed: {
        minutes() {
            return Math.floor(this.timeInSeconds / 60).toString().padStart(2, '0');
        },
        seconds() {
            return (this.timeInSeconds % 60).toString().padStart(2, '0');
        }
    },
    mounted() {
        this.interval = setInterval(() => {
            if (this.timeInSeconds > 0) {
                this.timeInSeconds--;
            } else {
                clearInterval(this.interval);
                this.$emit("finished"); // Emitir evento quando acabar, se quiser
            }
        }, 1000);
    },
    beforeDestroy() {
        clearInterval(this.interval);
    }
};
</script>


<style lang="css" scoped></style>