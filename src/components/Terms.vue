<template lang="pug">
  section.page
    //- Navbar
    navbar(bgColor='#121d23', position='relative')

    //- Content
    .page-content
      p.page-p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam, sem at elementum tempor, risus erat euismod lorem, nec efficitur libero leo vestibulum metus. Sed interdum tincidunt interdum. Etiam imperdiet tortor tortor, vitae porttitor ex tempus eget. Aliquam convallis nisi sed sapien condimentum, nec posuere tellus commodo. Donec vel finibus nunc. Nulla justo erat, ultricies non turpis ut, accumsan gravida tortor. Nulla eu metus at felis interdum convallis eget quis orci. Nunc tristique gravida scelerisque. Integer purus turpis, malesuada non lectus ac, porta porttitor velit. Cras porttitor vitae purus efficitur auctor. Cras a tempus odio, nec lobortis eros. Mauris fermentum urna tortor, at aliquam nunc accumsan a. Nunc dapibus velit ac ante varius imperdiet.

      p.page-p In hac habitasse platea dictumst. Nullam at ex quam. Maecenas ac ante blandit, sodales elit mattis, maximus orci. Curabitur vel tortor sed elit finibus tempus. Suspendisse venenatis laoreet porta. Donec quis imperdiet turpis. Integer varius nisl in orci consequat rhoncus. Vivamus cursus dui at ultricies tempus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed vel lorem porta, imperdiet dolor in, placerat nulla. Sed ultrices fringilla sapien ac ullamcorper. Integer eu luctus urna, nec condimentum leo. Fusce maximus est sit amet commodo ullamcorper. In tempus mauris in velit scelerisque scelerisque. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

      p.page-p Quisque sagittis laoreet augue id ultricies. Nulla dictum ac mauris a aliquet. Donec eu fermentum arcu, a luctus ex. Quisque eget magna et risus imperdiet malesuada ac sodales diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer tempus venenatis metus, quis ultricies ante aliquam sed. Suspendisse euismod, nisi quis sollicitudin consectetur, metus arcu posuere felis, nec pretium nulla purus a nulla. Suspendisse tempus in ipsum in efficitur. Fusce non dui elementum, molestie massa id, posuere purus.

      p.page-p Sed tristique luctus magna vitae condimentum. Integer ligula ipsum, gravida ac aliquam dictum, aliquet at ante. Cras viverra felis vel tempor egestas. Cras suscipit sem a suscipit scelerisque. Donec vestibulum lectus a orci imperdiet, eu ullamcorper risus pharetra. Integer consequat lobortis mauris eu aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at lacinia velit, eget varius tellus. Aliquam sit amet leo eget nunc elementum pellentesque. Phasellus consectetur aliquet ex vel rhoncus. Etiam a arcu pharetra, tincidunt metus non, ornare ipsum.

      p.page-p Nulla sagittis sodales sem in sagittis. Donec enim sapien, mattis ornare ultricies sed, consequat id risus. Aliquam eget ornare ligula. Donec tincidunt id mauris ac ullamcorper. Suspendisse vitae ligula vel est vulputate iaculis. Pellentesque non massa at risus facilisis egestas sed quis augue. Mauris porta mollis aliquet. Nam pretium, odio at semper commodo, sem dolor blandit elit, a pulvinar arcu dolor id massa. Nullam sodales eu velit vitae facilisis. Nulla vulputate semper dui, et ultrices ipsum commodo non. Nulla quis imperdiet mauris. Maecenas non rhoncus arcu. Suspendisse viverra accumsan ligula, id vestibulum arcu feugiat et. Nullam ultricies ullamcorper metus quis sollicitudin. Pellentesque congue in risus a convallis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
</template>

<script>
  // Components
  import Navbar from '@/components/common/Nav'

  export default {
    name: 'terms',
    components: {
      Navbar,
    }
  }
</script>

<style lang="scss" scoped>
  @import '~@/assets/styles/base/_fonts';

  @import '~@/assets/styles/utils/_colors';
  @import '~@/assets/styles/utils/_mixins';

  .page-content {
    padding: 112px;
    margin: 0 auto;
    font-family: 'AvenirRoman';
    font-size: 18px;
    transition: 0.2s ease-out all;
  }
  .page-p {
    line-height: 1.44;
    letter-spacing: 1.8px;
     transition: 0.2s ease-out all;
    & + .page-p {
      margin-top: 30px;
    }
  }

  // Responsive
  @media screen and (max-width: 768px) {
    .page-content {
      padding: 50px 40px;
      font-size: 12px;
    }
    .page-p {
      line-height: 2.17;
    }
  }
</style>
