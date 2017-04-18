<template>
	<router-link to="{name: 'game', params: {id: room.short_name}}">
	  <image-placeholder :src="room.game_icon"></image-placeholder>
	  <p class="title">{{room.game_name}}</p>
  </router-link>
</template>
<script>
import ImagePlaceholder from '../../components/image-placeholder'
 export default {
    props:{
      room:{
        type:Object,
        required:true
      }
    },
    components:{
      ImagePlaceholder
    }
 }
</script>