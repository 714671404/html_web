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
        data: () => ({
            layout: layouts['default'],
            default: 'base'
        })
    }
</script>

<style>

</style>
