<template>
    <div class="post-wrap">
        <div class="post-loading"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
};
</script>

<style scoped lang="scss">
.post-wrap {
    width: 33.33333%;
    padding: 0 8px;

    @media (max-width: 1080px) {
        &:nth-child(3n) {
            display: none;
        }
    }

    @media (max-width: 768px) {
        &:nth-child(3n + 1) {
            display: none;
        }
    }
}

.post-loading {
    position: relative;
    background-color: #ededed;
    height: 174px;
    border-radius: 2px;
    overflow: hidden;

    &::after {
        content: "";
        position: absolute;
        display: block;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        animation: loader-animate 1s ease infinite;
        background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.6) 30%,
            rgba(255, 255, 255, 0) 81%
        );
    }
}

@keyframes loader-animate {
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(100%);
    }
}
</style>
