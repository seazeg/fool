<template>
  <div class="wrapper">
    <!-- 视图 -->
    <div class="view">
      <el-tabs v-model="tabChecked" type="border-card">
        <el-tab-pane name="preview">
          <span slot="label" class="lab-icon">
            <i class="iconfont icon-yulan"></i>preview</span>
          <div class="view-box preview">
            <div class="eg_button">提交</div>
            <!-- <span :style="buttonStyle[0]" :onMouseOver='buttonHoverStyle[1]'
              :onMouseOut='buttonStyle[1]'>{{toolsParam.buttonText}}</span> -->
          </div>
        </el-tab-pane>
        <el-tab-pane name="html">
          <span slot="label" class="lab-icon">
            <i class="iconfont icon-html"></i>html</span>
          <div class="view-box html">
            <pre v-highlight>
              <!-- <code v-text="html">
              </code> -->
            </pre>
          </div>
        </el-tab-pane>
        <el-tab-pane name="css">
          <span slot="label" class="lab-icon">
            <i class="iconfont icon-css"></i>css</span>
          <div class="view-box css">
            <pre v-highlight>
              <!-- <code v-html="formatCSS">
              </code> -->
            </pre>
          </div>

        </el-tab-pane>
        <el-tab-pane name="javascript">
          <span slot="label" class="lab-icon">
            <i class="iconfont icon-js"></i>javascript</span>
          <div class="view-box js">
            <pre v-highlight>
              <!-- <code v-html="jsCode">
              </code> -->
            </pre>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <!-- 编辑 -->
    <div class="edit">
      <!-- 基础 -->
      <div class="control_group_title">基础信息：</div>
      <div class="control_group">
        <div class="box">
          <span class="field">buttonText</span>
          <p>
            <el-input v-model="base.buttonText" placeholder="请输入名称"></el-input>
          </p>
        </div>
        <div class="box">
          <span class="field">过渡时间（transitionDuration）</span>
          <p>
            <el-slider v-model="base.transitionDuration" :min="0" :max="5" :step="0.1" show-input></el-slider>
          </p>
        </div>
        <div class="box">
          <span class="field">动画效果（animation）</span>
          <p>
            <!-- <el-select v-model="styles.animationOpt" placeholder="请选择" style="width:100%">
              <el-option v-for="item in animationOpt" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select> -->

            <el-select v-model="base.animation" placeholder="请选择" style="width:100%">
              <el-option-group v-for="group in animationOpt" :key="group.label" :label="group.label">
                <el-option v-for="item in group.options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-option-group>
            </el-select>

          </p>
        </div>
      </div>

      <div class="control_group_title">基础样式：</div>
      <div class="control_group">
        <div class="box">
          <span class="field">宽度（width）</span>
          <p>
            <el-slider v-model="styles.width" :min="100" :max="500" show-input></el-slider>
          </p>
        </div>
        <div class="box">
          <span class="field">高度（height）</span>
          <p>
            <el-slider v-model="styles.height" :min="40" :max="500" show-input></el-slider>
          </p>
        </div>
        <div class="box">
          <span class="field">字号（fontSize）</span>
          <p>
            <el-slider v-model="styles.fontSize" :max="50" show-input></el-slider>
          </p>
        </div>
        <div class="box">
          <div class="left">
            <span class="field">字体颜色（color）</span>
            <p class="group">
              <el-color-picker v-model="styles.color" show-alpha></el-color-picker>
              <el-input v-model="styles.color" placeholder="请输入色号"></el-input>
            </p>
          </div>
          <div class="right">
            <span class="field">背景颜色（background）</span>
            <p class="group">
              <el-color-picker v-model="styles.backgroundColor" show-alpha></el-color-picker>
              <el-input v-model="styles.backgroundColor" placeholder="请输入色号"></el-input>
            </p>
          </div>
        </div>
        <div class="box">
          <span class="field">边框宽（borderWidth）</span>
          <p>
            <el-slider v-model="styles.borderWidth" :max="10" show-input></el-slider>
          </p>
        </div>
        <div class="box">
          <div class="left">
            <span class="field">边框样式（borderStyle）</span>
            <p>
              <el-select v-model="styles.borderStyle" placeholder="请选择" style="width:100%">
                <el-option v-for="item in borderOpt" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </p>
          </div>
          <div class="right">
            <span class="field">边框颜色（borderColor）</span>
            <p class="group">
              <el-color-picker v-model="styles.borderColor" show-alpha></el-color-picker>
              <el-input v-model="styles.borderColor" placeholder="请输入色号"></el-input>
            </p>
          </div>
        </div>
        <div class="box">
          <span class="field">圆角大小（borderRadius）</span>
          <p>
            <el-slider v-model="styles.borderRadius" :max="50" show-input></el-slider>
          </p>
        </div>
      </div>
      <div class="control_group_title">交互样式：</div>
      <div class="control_group">
        <div class="box">
          <span class="field">宽度（width）</span>
          <p>
            <el-slider v-model="animateStyles.width" :min="100" :max="500" show-input></el-slider>
          </p>
        </div>
        <div class="box">
          <span class="field">高度（height）</span>
          <p>
            <el-slider v-model="animateStyles.height" :min="40" :max="500" show-input></el-slider>
          </p>
        </div>
        <div class="box">
          <span class="field">字号（fontSize）</span>
          <p>
            <el-slider v-model="animateStyles.fontSize" :max="50" show-input></el-slider>
          </p>
        </div>
        <div class="box">
          <div class="left">
            <span class="field">字体颜色（color）</span>
            <p class="group">
              <el-color-picker v-model="animateStyles.color" show-alpha></el-color-picker>
              <el-input v-model="animateStyles.color" placeholder="请输入色号"></el-input>
            </p>
          </div>
          <div class="right">
            <span class="field">背景颜色（background）</span>
            <p class="group">
              <el-color-picker v-model="animateStyles.backgroundColor" show-alpha></el-color-picker>
              <el-input v-model="animateStyles.backgroundColor" placeholder="请输入色号"></el-input>
            </p>
          </div>
        </div>
        <div class="box">
          <span class="field">边框宽（borderWidth）</span>
          <p>
            <el-slider v-model="animateStyles.borderWidth" :max="10" show-input></el-slider>
          </p>
        </div>
        <div class="box">
          <div class="left">
            <span class="field">边框样式（borderStyle）</span>
            <p>
              <el-select v-model="animateStyles.borderStyle" placeholder="请选择" style="width:100%">
                <el-option v-for="item in borderOpt" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </p>
          </div>
          <div class="right">
            <span class="field">边框颜色（borderColor）</span>
            <p class="group">
              <el-color-picker v-model="animateStyles.borderColor" show-alpha></el-color-picker>
              <el-input v-model="animateStyles.borderColor" placeholder="请输入色号"></el-input>
            </p>
          </div>
        </div>
        <div class="box">
          <span class="field">圆角大小（borderRadius）</span>
          <p>
            <el-slider v-model="animateStyles.borderRadius" :max="50" show-input></el-slider>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tabChecked: 'preview',
        base: {
          buttonText: 'Button',
          transitionDuration: parseFloat(this.$utils.getClassValue('.eg_button').style.transitionDuration),
          animation: this.$utils.getClassValue('.eg_button:hover').style.animationName
        },
        styles: {
          width: parseInt(this.$utils.getClassValue('.eg_button').style.width),
          height: parseInt(this.$utils.getClassValue('.eg_button').style.height),
          color: this.$utils.getClassValue('.eg_button').style.color,
          fontSize: parseInt(this.$utils.getClassValue('.eg_button').style.fontSize),
          backgroundColor: this.$utils.getClassValue('.eg_button').style.backgroundColor,
          borderWidth: parseInt(this.$utils.getClassValue('.eg_button').style.borderWidth),
          borderStyle: this.$utils.getClassValue('.eg_button').style.borderStyle,
          borderColor: this.$utils.getClassValue('.eg_button').style.borderColor,
          borderRadius: parseInt(this.$utils.getClassValue('.eg_button').style.borderRadius)
        },
        animateStyles: {
          width: parseInt(this.$utils.getClassValue('.eg_button:hover').style.width),
          height: parseInt(this.$utils.getClassValue('.eg_button:hover').style.height),
          color: this.$utils.getClassValue('.eg_button:hover').style.color,
          fontSize: parseInt(this.$utils.getClassValue('.eg_button:hover').style.fontSize),
          backgroundColor: this.$utils.getClassValue('.eg_button:hover').style.backgroundColor,
          borderWidth: parseInt(this.$utils.getClassValue('.eg_button:hover').style.borderWidth),
          borderStyle: this.$utils.getClassValue('.eg_button:hover').style.borderStyle,
          borderColor: this.$utils.getClassValue('.eg_button:hover').style.borderColor,
          borderRadius: parseInt(this.$utils.getClassValue('.eg_button:hover').style.borderRadius)
        },
        senior: {
          texture: ''
        },
        animationOpt: [{
          label: '基础动画',
          options: [{
            value: 'bounce',
            label: 'bounce'
          }, {
            value: 'flash',
            label: 'flash'
          }, {
            value: 'pulse',
            label: 'pulse'
          }, {
            value: 'rubberBand',
            label: 'rubberBand'
          }, {
            value: 'shakeX',
            label: 'shakeX'
          }, {
            value: 'shakeY',
            label: 'shakeY'
          }, {
            value: 'headShake',
            label: 'headShake'
          }, {
            value: 'swing',
            label: 'swing'
          }, {
            value: 'tada',
            label: 'tada'
          }, {
            value: 'wobble',
            label: 'wobble'
          }, {
            value: 'jello',
            label: 'jello'
          }, {
            value: 'heartBeat',
            label: 'heartBeat'
          }]
        }, {
          label: 'Flippers',
          options: [{
            value: 'flip',
            label: 'flip'
          }, {
            value: 'flipInX',
            label: 'flipInX'
          }, {
            value: 'flipInY',
            label: 'flipInY'
          }, {
            value: 'flipOutX',
            label: 'flipOutX'
          }, {
            value: 'flipOutY',
            label: 'flipOutY'
          }]
        }],
        borderOpt: [{
          value: 'solid',
          label: 'solid'
        }, {
          value: 'dotted',
          label: 'dotted'
        }, {
          value: 'dashed',
          label: 'dashed'
        }, {
          value: 'double',
          label: 'double'
        }, {
          value: 'groove',
          label: 'groove'
        }, {
          value: 'ridge',
          label: 'ridge'
        }, {
          value: 'inset',
          label: 'inset'
        }, {
          value: 'outset',
          label: 'outset'
        }, {
          value: 'none',
          label: 'none'
        }]
      }
    },
    watch: {
      //基础
      'base.transitionDuration': function (n, o) {
        this.$utils.getClassValue('.eg_button').style.transitionDuration = n + 's';
        this.$utils.getClassValue('.eg_button:hover').style.transitionDuration = n + 's';
        this.$utils.getClassValue('.eg_button:hover').style.animationDuration = n + 's';
      },
      'base.animation': function (n, o) {
        this.$utils.getClassValue('.eg_button:hover').style.animationName = n;
        this.$utils.getClassValue('.eg_button:hover').style.animationDuration = this.$utils.getClassValue(
          '.eg_button').style.transitionDuration;
      },
      'styles.width': function (n, o) {
        this.$utils.getClassValue('.eg_button').style.width = n + 'px';
      },
      'styles.height': function (n, o) {
        this.$utils.getClassValue('.eg_button').style.height = n + 'px';
        this.$utils.getClassValue('.eg_button').style.lineHeight = n + 'px';
      },
      'styles.color': function (n, o) {
        this.$utils.getClassValue('.eg_button').style.color = n;
      },
      'styles.fontSize': function (n, o) {
        this.$utils.getClassValue('.eg_button').style.fontSize = n + 'px';
      },
      'style.backgroundColor': function (n, o) {
        this.$utils.getClassValue('.eg_button').style.backgroundColor = n;
      },
      'styles.borderWidth': function (n, o) {
        this.$utils.getClassValue('.eg_button').style.borderWidth = n + 'px';
        this.$utils.getClassValue('.eg_button').style.lineHeight = (parseInt(this.$utils.getClassValue('.eg_button')
          .style.height) - n * 2) + 'px';
      },
      'styles.borderStyle': function (n, o) {
        this.$utils.getClassValue('.eg_button').style.borderStyle = n;
      },
      'styles.borderColor': function (n, o) {
        this.$utils.getClassValue('.eg_button').style.borderColor = n;
      },
      'styles.borderRadius': function (n, o) {
        this.$utils.getClassValue('.eg_button').style.borderRadius = n + 'px';
      },
      'animateStyles.width': function (n, o) {
        this.$utils.getClassValue('.eg_button:hover').style.width = n + 'px';
      },
      'animateStyles.height': function (n, o) {
        this.$utils.getClassValue('.eg_button:hover').style.height = n + 'px';
        this.$utils.getClassValue('.eg_button:hover').style.lineHeight = n + 'px';
      },
      //交互
      'animateStyles.color': function (n, o) {
        this.$utils.getClassValue('.eg_button:hover').style.color = n;
      },
      'animateStyles.fontSize': function (n, o) {
        this.$utils.getClassValue('.eg_button:hover').style.fontSize = n + 'px';
      },
      'animateStyles.backgroundColor': function (n, o) {
        this.$utils.getClassValue('.eg_button:hover').style.backgroundColor = n;
      },
      'animateStyles.borderWidth': function (n, o) {
        this.$utils.getClassValue('.eg_button:hover').style.borderWidth = n + 'px';
        this.$utils.getClassValue('.eg_button:hover').style.lineHeight = (parseInt(this.$utils.getClassValue(
            '.eg_button:hover')
          .style.height) - n * 2) + 'px';
      },
      'animateStyles.borderStyle': function (n, o) {
        this.$utils.getClassValue('.eg_button:hover').style.borderStyle = n;
      },
      'animateStyles.borderColor': function (n, o) {
        this.$utils.getClassValue('.eg_button:hover').style.borderColor = n;
      },
      'animateStyles.borderRadius': function (n, o) {
        this.$utils.getClassValue('.eg_button:hover').style.borderRadius = n + 'px';
      }
    },
    computed: {

    },
    mounted() {
      console.log(this.$utils.getClassValue('.eg_button:hover').style);
    }
  }
</script>