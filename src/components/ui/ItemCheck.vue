<template>
    <li>
        <div class="item-feature">
            <Check color="var(--simpliz-success)" :size="20" /> {{ description }}
        </div>
        <hr v-if="index < maxArray - 1 && index !== null && maxArray !== null" class="full-width-divider" />
    </li>
</template>

<script>
import { Check } from 'lucide-vue'
export default {
    props: {
        description: String,
        index: Number || null,
        maxArray: Number || null
    },
    components: { Check }

};
</script>

<style scoped>
.full-width-divider {
    width: 100%;
    align-self: stretch;
    border: none;
    border-top: 1px solid #ccc;
    margin: 8px 0;
    display: block;
    flex: 0 0 auto;
}

.item-feature {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 5px;
    margin: 5px 0px;
    color: white;
    font-weight: bolder;
}

li::marker {
    content: "";
}
</style>