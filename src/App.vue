<template>
    <div id="app">
        <transition>
            <component :is="layout" v-if="layout"></component>
        </transition>
    </div>
</template>

<script>
    const requireContext = require.context('./views/layouts', false, /.*\.vue$/);
    const layouts = requireContext.keys()
        .map(file =>
            [file.replace(/(^.\/)|(\.vue$)/g, ''), requireContext(file)]
        )
        .reduce((components, [name, component]) => {
            components[name] = component.default || component;
            return components
        }, {});

    export default {
        el: '#app',
        data: () => ({
            layout: null,
            defaultLayout: 'default'
        }),
        methods: {
            setLayout(layout) {
                if (!layout || !layouts[layout]) {
                    this.layout = this.defaultLayout
                }
                console.log(1);
                this.layout = layouts[layout]
            }
        }
    }
</script>

<style>

</style>
