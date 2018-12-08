window.onload=function(){new Vue({el:"#root",data:{choicesAreShown:!1,focusedOS:""},methods:{focusOS:function(e){this.focusedOS=e}}})},Vue.component("download-choice",{props:["os-info"],data:function(){return{}},methods:{emitOSClickedEvent:function(){this.$emit("os-clicked",this.osInfo.id)}},template:"<div class='os-choice-option'>                <a :href='\"#\" + osInfo.id' class='scroll-link no-decoration'>                <transition name='focus'>                  <button type='button' class='os-btn' :class='[osInfo.id + \"-btn\", osInfo.btnState]' @click='emitOSClickedEvent'>                    <h3 :class='osInfo.id + \"-text\"'>{{ osInfo.os }}</h3>                    <img :src='osInfo.iconPath' class='os-choice-img' :alt='osInfo.imgAlt'>                  </button>                </transition>                </a>                <transition name='expand' v-for='subsection in osInfo.subsections' :key='subsection.key'>                  <download-subsection                  :os='osInfo.id'                  :subsectionInfo='subsection'                  v-if='osInfo.btnState === \"is-focused\"'>                  </download-subsection>                </transition>              </div>"}),Vue.component("download-grid",{props:["styles"],data:function(){return{osChoices:[{os:"Windows",id:"windows",iconPath:"dist/images/windows-logo.png",imgAlt:"Windows logo",btnState:"",subsections:[{note:"Requires Win10 (Best Performance)",links:[{text:"DirectX 12 (Steam)",href:"https://dustkid.com/getdustmod/win32_dx12_steam"},{text:"DirectX 12 (DRM-Free)",href:"https://dustkid.com/getdustmod/win32_dx12_drmfree"}],key:"winSub0"},{note:"The same as vanilla Dustforce",links:[{text:"DirectX 9 (Steam)",href:"https://dustkid.com/getdustmod/win32_steam"},{text:"DirectX 9 (DRM-Free)",href:"https://dustkid.com/getdustmod/win32_drmfree"}],key:"winSub1"},{note:"OpenGL Based",links:[{text:"SDL2 (Steam)",href:"https://dustkid.com/getdustmod/win32_sdl2_steam"},{text:"SDL2 (DRM-Free)",href:"https://dustkid.com/getdustmod/win32_sdl2_drmfree"}],key:"winSub2"}],subsectionStyles:["is-hidden","is-collapsed"]},{os:"Mac OS X",id:"mac",iconPath:"dist/images/apple-logo.png",imgAlt:"Apple logo",btnState:"",subsections:[{note:"",links:[{text:"64-Bit (Steam)",href:"https://dustkid.com/getdustmod/osx64_steam"},{text:"64-Bit (DRM-Free)",href:"https://dustkid.com/getdustmod/osx64_drmfree"}],key:"macSub0"}],subsectionStyles:["is-hidden","is-collapsed"]},{os:"Linux",id:"linux",iconPath:"dist/images/linux-logo.png",imgAlt:"Linux logo",btnState:"",subsections:[{note:"",links:[{text:"64-Bit (Steam)",href:"https://dustkid.com/getdustmod/linux64_steam"},{text:"64-Bit (DRM-Free)",href:"https://dustkid.com/getdustmod/linux64_drmfree"}],key:"linuxSub0"}],subsectionStyles:["is-hidden","is-collapsed"]}]}},methods:{onOSClicked:function(e){for(var t=0;t<this.osChoices.length;t++)this.osChoices[t].id===e?this.osChoices[t].btnState="is-focused":this.osChoices[t].btnState="is-semi-transparent"}},template:"<div class='os-choice-grid' :class='styles'>                <download-choice                v-for='os in osChoices'                :key='os.id'                :id='os.id'                :os-info='os'                @os-clicked='onOSClicked'>                </download-choice>                </div>"}),Vue.component("download-subsection",{props:["os","subsection-info"],data:function(){return{styles:["is-hidden","is-collapsed"]}},template:"<div class='dl-subsection' :class='[os + \"-subsection\", styles]'>                <p v-for='link in subsectionInfo.links'>                  <a :href='link.href'>{{ link.text }}</a>                </p>              </div>"}),Vue.component("download-version",{data:function(){return{versionNumber:""}},methods:{getVersionNumber:function(){var e=new XMLHttpRequest;e.open("GET","http://dustkid.com/backend8/dustmod_version.php",!0),e.onload=function(){console.log("test");var e=JSON.parse(this.response);console.log(e)},e.send()}},created:function(){this.getVersionNumber()},template:"<h3>Version {{ versionNumber }}</h3>"}),Vue.component("feature-grid",{data:function(){return{features:[{index:0,caption:"Online Multiplayer",images:[{path:"dist/images/feature-images/multiplayer-1.jpg",key:"multiplayer-1",zIndex:0},{path:"dist/images/feature-images/multiplayer-2.jpg",key:"multiplayer-2",zIndex:0},{path:"dist/images/feature-images/multiplayer-3.jpg",key:"multiplayer-3",zIndex:0}],controlsAreLocked:!1},{index:1,caption:"Quality of Life Changes",images:[{path:"dist/images/feature-images/quality-of-life-1.jpg",key:"quality-of-life-1",zIndex:0},{path:"dist/images/feature-images/quality-of-life-2.jpg",key:"quality-of-life-2",zIndex:0},{path:"dist/images/feature-images/quality-of-life-3.jpg",key:"quality-of-life-3",zIndex:0},{path:"dist/images/feature-images/quality-of-life-4.jpg",key:"quality-of-life-4",zIndex:0},{path:"dist/images/feature-images/quality-of-life-5.jpg",key:"quality-of-life-5",zIndex:0}],controlsAreLocked:!1},{index:2,caption:"Community Nexus",images:[{path:"dist/images/feature-images/community-nexus-1.jpg",key:"community-nexus-1",zIndex:0},{path:"dist/images/feature-images/community-nexus-2.jpg",key:"community-nexus-2",zIndex:0},{path:"dist/images/feature-images/community-nexus-3.jpg",key:"community-nexus-3",zIndex:0},{path:"dist/images/feature-images/community-nexus-4.jpg",key:"community-nexus-4",zIndex:0},{path:"dist/images/feature-images/community-nexus-5.jpg",key:"community-nexus-5",zIndex:0}],controlsAreLocked:!1},{index:3,caption:"Enhanced Custom Level Editor",images:[{path:"dist/images/feature-images/editor-1.jpg",key:"editor-1",zIndex:0},{path:"dist/images/feature-images/editor-2.jpg",key:"editor-2",zIndex:0},{path:"dist/images/feature-images/editor-3.jpg",key:"editor-3",zIndex:0}],controlsAreLocked:!1},{index:4,caption:"Extended Leaderboards",images:[{path:"dist/images/feature-images/leaderboard-1.jpg",key:"leaderboard-1",zIndex:0},{path:"dist/images/feature-images/leaderboard-2.jpg",key:"leaderboard-2",zIndex:0},{path:"dist/images/feature-images/leaderboard-3.jpg",key:"leaderboard-3",zIndex:0}],controlsAreLocked:!1},{index:5,caption:"Custom Level Scripting",images:[{path:"dist/images/feature-images/scripting-1.jpg",key:"scripting-1",zIndex:0},{path:"dist/images/feature-images/scripting-2.jpg",key:"scripting-2",zIndex:0},{path:"dist/images/feature-images/scripting-3.jpg",key:"scripting-3",zIndex:0}],controlsAreLocked:!1},{index:6,caption:"Daily Featured Custom Level",images:[{path:"dist/images/feature-images/daily-1.jpg",key:"daily-1",zIndex:0},{path:"dist/images/feature-images/daily-2.jpg",key:"daily-2",zIndex:0},{path:"dist/images/feature-images/daily-3.jpg",key:"daily-3",zIndex:0},{path:"dist/images/feature-images/daily-4.jpg",key:"daily-4",zIndex:0},{path:"dist/images/feature-images/daily-5.jpg",key:"daily-5",zIndex:0}],controlsAreLocked:!1},{index:7,caption:"TAS Tools",images:[{path:"dist/images/feature-images/tas-tools-1.jpg",key:"tas-tools-1",zIndex:0},{path:"dist/images/feature-images/tas-tools-2.jpg",key:"tas-tools-2",zIndex:0},{path:"dist/images/feature-images/tas-tools-3.jpg",key:"tas-tools-3",zIndex:0}],controlsAreLocked:!1}]}},methods:{lockControls:function(e){this.features[e].controlsAreLocked=!0},unlockControls:function(e){this.features[e].controlsAreLocked=!1},slideImagesLeft:function(e){!1===this.features[e].controlsAreLocked&&(this.lockControls(e),this.features[e].images[this.features[e].images.length-1].zIndex=-1,this.features[e].images.unshift(this.features[e].images.pop()),setTimeout(function(){this.resetAllZIndexes(e),this.unlockControls(e)}.bind(this),400))},slideImagesRight:function(e){!1===this.features[e].controlsAreLocked&&(this.lockControls(e),this.features[e].images[0].zIndex=-1,this.features[e].images.push(this.features[e].images.shift()),setTimeout(function(){this.resetAllZIndexes(e),this.unlockControls(e)}.bind(this),400))},resetAllZIndexes:function(e){for(var t=0;t<this.features[e].images.length;t++)this.features[e].images[t].zIndex=0}},template:'<div class="feature-grid">                    <feature                    v-for="feature in features"                    :feature-info="feature"                    :key="feature.caption"                    @prev-clicked="slideImagesLeft"                    @next-clicked="slideImagesRight"                    @transition-end="resetAllZIndexes"></feature>                </div>'}),Vue.component("feature-overlay",{props:[],data:function(){return{}},methods:{emitPrevClicked:function(){this.$parent.$emit("prev-clicked",this.$parent.featureInfo.index)},emitNextClicked:function(){this.$parent.$emit("next-clicked",this.$parent.featureInfo.index)}},template:'<div class="feature-slider-controls">                    <div class="feature-slider-btn feature-slider-prev" @click="emitPrevClicked">                        <img src="dist/images/prev.png" class="slider-icon" alt="previous image">                    </div>                    <div class="feature-slider-btn feature-slider-next" @click="emitNextClicked">                        <img src="dist/images/next.png" class="slider-icon" alt="next image">                    </div>                </div>'}),Vue.component("feature",{props:["feature-info"],data:function(){return{}},template:'<div class="feature">                    <transition-group                    name="image-slider"                    tag="div"                    class="feature-images">                        <img v-for="image in featureInfo.images"                        :src="image.path"                        class="feature-image"                        :key="image.key"                        :style="{ zIndex: image.zIndex }"                        :alt="\'Dustmod \' + featureInfo.caption">                    </transition-group>                    <feature-overlay></feature-overlay>                    <div class="feature-caption">                        <p>{{ featureInfo.caption }}</p>                    </div>                </div>'});