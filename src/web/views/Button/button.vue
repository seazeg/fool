<template>
  <div class="wrapper">
    <!-- 视图 -->
    <div class="view">
      <el-tabs v-model="tabChecked" type="border-card" @tab-click="toHtml">
        <el-tab-pane name="preview">
          <span slot="label" class="lab-icon">
            <i class="iconfont icon-yulan"></i>preview</span>
          <div class="view-box preview" id="preview">
            <div class="eg_button">{{base.buttonText}}</div>
            <div class="eg_button gradient">{{base.buttonText}}</div>
          </div>
        </el-tab-pane>
        <el-tab-pane name="html">
          <span slot="label" class="lab-icon">
            <i class="iconfont icon-html"></i>html</span>
          <div class="view-box html" v-highlight>
            <pre>
              <code v-text="workarea.html">
              </code>
            </pre>
          </div>
        </el-tab-pane>
        <el-tab-pane name="css">
          <span slot="label" class="lab-icon">
            <i class="iconfont icon-css"></i>css</span>
          <div class="view-box css" v-highlight>
            <pre>
              <code v-html="workarea.css">
              </code>
            </pre>
          </div>

        </el-tab-pane>
        <el-tab-pane name="javascript">
          <span slot="label" class="lab-icon">
            <i class="iconfont icon-js"></i>javascript</span>
          <div class="view-box js" v-highlight>
            <pre>
              <code v-html="workarea.js">
              </code>
            </pre>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <!-- 编辑 -->
    <div class="edit">
      <!-- 基础属性 -->
      <div class="control_group_title">基础属性</div>
      <div class="control_group">
        <div class="box">
          <span class="field">按钮标题（buttonText）</span>
          <p>
            <el-input v-model="base.buttonText" placeholder="请输入名称"></el-input>
          </p>
        </div>
      </div>
      <!-- 基础样式 -->
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
          <span class="field">圆角大小（borderRadius）</span>
          <p>
            <el-slider v-model="styles.borderRadius" :max="50" show-input></el-slider>
          </p>
        </div>
        <div class="control_group_title">主要颜色：</div>
        <div class="control_group">
          <div class="box">
            <div class="left">
              <span class="field">字体颜色（color）</span>
              <p class="group">
                <el-color-picker v-model="styles.color" show-alpha></el-color-picker>
                <el-input v-model="styles.color" placeholder="请输入色号"></el-input>
              </p>
            </div>
            <div class="right">
              <span class="field">背景颜色（backgroundColor）</span>
              <p class="group">
                <el-color-picker v-model="styles.backgroundColor" show-alpha></el-color-picker>
                <el-input v-model="styles.backgroundColor" placeholder="请输入色号"></el-input>
              </p>
            </div>
          </div>
          <div class="box">
            <div class="left">
              <span class="field">背景渐变色开始（gradientStart）</span>
              <p class="group">
                <el-color-picker v-model="styles.gradientStart" color-format="rgb"></el-color-picker>
                <el-input v-model="styles.gradientStart" placeholder="请输入色号"></el-input>
              </p>
            </div>
            <div class="right">
              <span class="field">背景渐变色结束（gradientEnd）</span>
              <p class="group">
                <el-color-picker v-model="styles.gradientEnd" color-format="rgb"></el-color-picker>
                <el-input v-model="styles.gradientEnd" placeholder="请输入色号"></el-input>
              </p>
            </div>
          </div>

        </div>

        <div class="control_group_title">边框：</div>
        <div class="control_group">
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
                <el-select v-model="styles.borderStyle" placeholder="请选择" style="width:100%" :clearable=true>
                  <el-option v-for="item in borderOpt" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </p>
            </div>
            <div class="right">
              <span class="field">边框颜色（borderColor）</span>
              <p class="group">
                <el-color-picker v-model="styles.borderColor" color-format="rgb"></el-color-picker>
                <el-input v-model="styles.borderColor" placeholder="请输入色号"></el-input>
              </p>
            </div>
          </div>
          <!-- <div class="box">
            <div class="left">
              <span class="field">边框渐变色开始（gradientStart）</span>
              <p class="group">
                <el-color-picker v-model="interactionStyles.backgroundColor"></el-color-picker>
                <el-input v-model="interactionStyles.backgroundColor" placeholder="请输入色号"></el-input>
              </p>
            </div>
            <div class="right">
              <span class="field">边框渐变色结束（gradientEnd）</span>
              <p class="group">
                <el-color-picker v-model="interactionStyles.backgroundColor"></el-color-picker>
                <el-input v-model="interactionStyles.backgroundColor" placeholder="请输入色号"></el-input>

              </p>
            </div>
          </div> -->

        </div>


      </div>
      <!-- 交互样式 -->
      <div class="control_group_title">交互样式：</div>
      <div class="control_group">
        <!-- <div class="box">
          <span class="field">宽度（width）</span>
          <p>
            <el-slider v-model="interactionStyles.width" :min="100" :max="500" show-input></el-slider>
          </p>
        </div>
        <div class="box">
          <span class="field">高度（height）</span>
          <p>
            <el-slider v-model="interactionStyles.height" :min="40" :max="500" show-input></el-slider>
          </p>
        </div> -->
        <div class="box">
          <span class="field">字号（fontSize）</span>
          <p>
            <el-slider v-model="interactionStyles.fontSize" :max="50" show-input></el-slider>
          </p>
        </div>
        <div class="box">
          <span class="field">圆角大小（borderRadius）</span>
          <p>
            <el-slider v-model="interactionStyles.borderRadius" :max="50" show-input></el-slider>
          </p>
        </div>

        <div class="control_group_title">颜色：</div>
        <div class="control_group">
          <div class="box">
            <div class="left">
              <span class="field">字体颜色（color）</span>
              <p class="group">
                <el-color-picker v-model="interactionStyles.color" show-alpha></el-color-picker>
                <el-input v-model="interactionStyles.color" placeholder="请输入色号"></el-input>
              </p>
            </div>
            <div class="right">
              <span class="field">背景颜色（backgroundColor）</span>
              <p class="group">
                <el-color-picker v-model="interactionStyles.backgroundColor" show-alpha></el-color-picker>
                <el-input v-model="interactionStyles.backgroundColor" placeholder="请输入色号"></el-input>
              </p>
            </div>
          </div>

          <div class="box">
            <div class="left">
              <span class="field">背景渐变色开始（gradientStart）</span>
              <p class="group">
                <el-color-picker v-model="interactionStyles.gradientStart" color-format="rgb"></el-color-picker>
                <el-input v-model="interactionStyles.gradientStart" placeholder="请输入色号"></el-input>
              </p>
            </div>
            <div class="right">
              <span class="field">背景渐变色结束（gradientEnd）</span>
              <p class="group">
                <el-color-picker v-model="interactionStyles.gradientEnd" color-format="rgb"></el-color-picker>
                <el-input v-model="interactionStyles.gradientEnd" placeholder="请输入色号"></el-input>
              </p>
            </div>
          </div>

        </div>


        <div class="control_group_title">边框：</div>
        <div class="control_group">
          <div class="box">
            <span class="field">边框宽（borderWidth）</span>
            <p>
              <el-slider v-model="interactionStyles.borderWidth" :max="10" show-input></el-slider>
            </p>
          </div>
          <div class="box">
            <div class="left">
              <span class="field">边框样式（borderStyle）</span>
              <p>
                <el-select v-model="interactionStyles.borderStyle" placeholder="请选择" style="width:100%" :clearable=true>
                  <el-option v-for="item in borderOpt" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </p>
            </div>
            <div class="right">
              <span class="field">边框颜色（borderColor）</span>
              <p class="group">
                <el-color-picker v-model="interactionStyles.borderColor" color-format="rgb"></el-color-picker>
                <el-input v-model="interactionStyles.borderColor" placeholder="请输入色号"></el-input>
              </p>
            </div>
          </div>
          <!-- <div class="box">
            <div class="left">
              <span class="field">边框渐变色开始（gradientStart）</span>
              <p class="group">
                <el-color-picker v-model="interactionStyles.backgroundColor" ></el-color-picker>
                <el-input v-model="interactionStyles.backgroundColor" placeholder="请输入色号"></el-input>
              </p>
            </div>
            <div class="right">
              <span class="field">边框渐变色结束（gradientEnd)</span>
              <p class="group">
                <el-color-picker v-model="interactionStyles.backgroundColor"></el-color-picker>
                <el-input v-model="interactionStyles.backgroundColor" placeholder="请输入色号"></el-input>

              </p>
            </div>
          </div> -->

        </div>

      </div>


      <!-- 动画 -->
      <div class="control_group_title">动画效果：</div>
      <div class="control_group">
        <div class="box">
          <span class="field">过渡时间（transitionDuration）</span>
          <p>
            <el-slider v-model="animationStyles.transitionDuration" :min="0" :max="5" :step="0.1" show-input>
            </el-slider>
          </p>
        </div>
        <div class="box">
          <span class="field">动画效果（animation）</span>
          <p>
            <el-select v-model="animationStyles.animation" placeholder="请选择" style="width:100%" :clearable=true>
              <el-option-group v-for="group in animationOpt" :key="group.label" :label="group.label">
                <el-option v-for="item in group.options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-option-group>
            </el-select>
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
        workarea: {
          html: ``,
          css: this.$utils.cssFormat(this.$utils.getClassValue('.eg_button').cssText) + this.$utils.cssFormat(this
            .$utils.getClassValue('.eg_button:hover').cssText) + this.$utils.cssFormat(this
            .$utils.getClassValue('.eg_button.gradient').cssText) + this.$utils.cssFormat(this
            .$utils.getClassValue('.eg_button.gradient:hover').cssText),
          js: ''
        },
        base: {
          buttonText: 'Button',
        },
        animationStyles: {
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
          borderRadius: parseInt(this.$utils.getClassValue('.eg_button').style.borderRadius),
          gradientStart: this.$utils.getGradientParam(this.$utils.getClassValue('.eg_button.gradient').style
            .backgroundImage).start,
          gradientEnd: this.$utils.getGradientParam(this.$utils.getClassValue('.eg_button.gradient').style
            .backgroundImage).end,
        },
        interactionStyles: {
          width: parseInt(this.$utils.getClassValue('.eg_button:hover').style.width),
          height: parseInt(this.$utils.getClassValue('.eg_button:hover').style.height),
          color: this.$utils.getClassValue('.eg_button:hover').style.color,
          fontSize: parseInt(this.$utils.getClassValue('.eg_button:hover').style.fontSize),
          backgroundColor: this.$utils.getClassValue('.eg_button:hover').style.backgroundColor,
          borderWidth: parseInt(this.$utils.getClassValue('.eg_button:hover').style.borderWidth),
          borderStyle: this.$utils.getClassValue('.eg_button:hover').style.borderStyle,
          borderColor: this.$utils.getClassValue('.eg_button:hover').style.borderColor,
          borderRadius: parseInt(this.$utils.getClassValue('.eg_button:hover').style.borderRadius),
          gradientStart: this.$utils.getGradientParam(this.$utils.getClassValue('.eg_button.gradient:hover').style
            .backgroundImage).start,
          gradientEnd: this.$utils.getGradientParam(this.$utils.getClassValue('.eg_button.gradient:hover').style
            .backgroundImage).end,
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
    computed: {
      normal: function () {
        return this.$utils.getClassValue('.eg_button')
      },
      normalHover: function () {
        return this.$utils.getClassValue('.eg_button:hover')
      },
      gradient: function () {
        return this.$utils.getClassValue('.eg_button.gradient')
      },
      gradientHover: function () {
        return this.$utils.getClassValue('.eg_button.gradient:hover')
      }
    },
    watch: {
      'base.buttonText': function (n, o) {
        this.workarea.html = document.querySelector('#preview').innerHTML.replace('> <', '>\n<');
      },
      //动画
      'animationStyles.transitionDuration': function (n, o) {
        this.normal.style.transitionDuration = n + 's';
        this.normalHover.style.transitionDuration = n + 's';
        this.normalHover.style.animationDuration = n + 's';

        this.cssUpdate();

      },
      'animationStyles.animation': function (n, o) {
        this.normalHover.style.animationName = n;
        this.normalHover.style.animationDuration = this.$utils.getClassValue(
          '.eg_button').style.transitionDuration;

        this.cssUpdate()
      },
      //基础
      'styles.width': function (n, o) {
        this.normal.style.width = n + 'px';

        this.cssUpdate()
      },
      'styles.height': function (n, o) {
        this.normal.style.height = n + 'px';
        this.normal.style.lineHeight = n + 'px';
        this.gradient.style.lineHeight = n + 'px';
        this.cssUpdate()
      },
      'styles.color': function (n, o) {
        this.normal.style.color = n;

        this.cssUpdate()
      },
      'styles.fontSize': function (n, o) {
        this.normal.style.fontSize = n + 'px';

        this.cssUpdate()
      },
      'styles.backgroundColor': function (n, o) {
        this.normal.style.backgroundColor = n;

        this.cssUpdate()
      },
      'styles.borderWidth': function (n, o) {
        this.normal.style.borderWidth = n + 'px';
        this.normal.style.lineHeight = (parseInt(this.normal
          .style.height) - n * 2) + 'px';

        this.cssUpdate()
      },
      'styles.borderStyle': function (n, o) {
        this.normal.style.borderStyle = n;

        this.cssUpdate()
      },
      'styles.borderColor': function (n, o) {
        this.normal.style.borderColor = n;

        this.cssUpdate()
      },
      'styles.borderRadius': function (n, o) {
        this.normal.style.borderRadius = n + 'px';

        this.cssUpdate()
      },
      'styles.gradientStart': function (n, o) {
        this.gradient.style.backgroundImage = `linear-gradient(to right, ${n} 0%, ${this.$utils.getGradientParam(this.gradient.style
            .backgroundImage).end} 51%, ${n} 100%)`
        this.cssUpdate()
      },
      'styles.gradientEnd': function (n, o) {
        this.gradient.style.backgroundImage = `linear-gradient(to right, ${this.$utils.getGradientParam(this.gradient.style
            .backgroundImage).start} 0%, ${n} 51%, ${this.$utils.getGradientParam(this.gradient.style
            .backgroundImage).start} 100%)`
        this.cssUpdate()
      },
      'interactionStyles.width': function (n, o) {
        this.normalHover.style.width = n + 'px';
        this.cssUpdate()
      },
      'interactionStyles.height': function (n, o) {
        this.normalHover.style.height = n + 'px';
        this.normalHover.style.lineHeight = n + 'px';

        this.cssUpdate()
      },
      //交互
      'interactionStyles.color': function (n, o) {
        this.normalHover.style.color = n;

        this.cssUpdate()
      },
      'interactionStyles.fontSize': function (n, o) {
        this.normalHover.style.fontSize = n + 'px';

        this.cssUpdate()
      },
      'interactionStyles.backgroundColor': function (n, o) {
        this.normalHover.style.backgroundColor = n;

        this.cssUpdate()
      },
      'interactionStyles.borderWidth': function (n, o) {
        this.normalHover.style.borderWidth = n + 'px';
        this.normalHover.style.lineHeight = (parseInt(this.$utils.getClassValue(
            '.eg_button:hover')
          .style.height) - n * 2) + 'px';

        this.cssUpdate()
      },
      'interactionStyles.borderStyle': function (n, o) {
        this.normalHover.style.borderStyle = n;

        this.cssUpdate()
      },
      'interactionStyles.borderColor': function (n, o) {
        this.normalHover.style.borderColor = n;

        this.cssUpdate()
      },
      'interactionStyles.borderRadius': function (n, o) {
        this.normalHover.style.borderRadius = n + 'px';

        this.cssUpdate()
      },
      'interactionStyles.gradientStart': function (n, o) {
        this.gradientHover.style.backgroundImage = `linear-gradient(to right, ${n} 0%, ${this.$utils.getGradientParam(this.gradientHover.style
            .backgroundImage).end} 51%, ${n} 100%)`
        this.cssUpdate()
      },
      'interactionStyles.gradientEnd': function (n, o) {
        this.gradientHover.style.backgroundImage = `linear-gradient(to right, ${this.$utils.getGradientParam(this.gradientHover.style
            .backgroundImage).start} 0%, ${n} 51%, ${this.$utils.getGradientParam(this.gradientHover.style
            .backgroundImage).start} 100%)`
        this.cssUpdate()
      },
    },
    methods: {
      toHtml(tab, event) {
        this.workarea.html = document.querySelector('#preview').innerHTML.replace('> <', '>\n<')
      },
      cssUpdate() {
        this.workarea.css = this.$utils.cssFormat(this.normal.cssText + this.normalHover.cssText + this.gradient
          .cssText + this.gradientHover.cssText)
      }
    },
    mounted() {
      // console.log(this.$utils.getClassValue('.eg_button').style.backgroundImage)
    }
  }
</script>