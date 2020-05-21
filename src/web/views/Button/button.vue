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
      <!-- 基础 -->
      <div class="control_group_title">基础属性</div>
      <div class="control_group">
        <div class="box">
          <span class="field">按钮标题</span>
          <p>
            <el-input v-model="base.buttonText" placeholder="请输入名称"></el-input>
          </p>
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
              <el-select v-model="styles.borderStyle" placeholder="请选择" style="width:100%" :clearable=true>
                <el-option v-for="item in borderOpt" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </p>
          </div>
          <div class="right">
            <span class="field">边框颜色（borderColor）</span>
            <p class="group">
              <el-color-picker v-model="styles.borderColor" show-alpha color-format=""></el-color-picker>
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
          <div class="left">
            <span class="field">字体颜色（color）</span>
            <p class="group">
              <el-color-picker v-model="interactionStyles.color" show-alpha></el-color-picker>
              <el-input v-model="interactionStyles.color" placeholder="请输入色号"></el-input>
            </p>
          </div>
          <div class="right">
            <span class="field">背景颜色（background）</span>
            <p class="group">
              <el-color-picker v-model="interactionStyles.backgroundColor" show-alpha></el-color-picker>
              <el-input v-model="interactionStyles.backgroundColor" placeholder="请输入色号"></el-input>
            </p>
          </div>
        </div>
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
              <el-color-picker v-model="interactionStyles.borderColor" show-alpha></el-color-picker>
              <el-input v-model="interactionStyles.borderColor" placeholder="请输入色号"></el-input>
            </p>
          </div>
        </div>
        <div class="box">
          <span class="field">圆角大小（borderRadius）</span>
          <p>
            <el-slider v-model="interactionStyles.borderRadius" :max="50" show-input></el-slider>
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
            .$utils.getClassValue('.eg_button:hover').cssText),
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
          borderRadius: parseInt(this.$utils.getClassValue('.eg_button').style.borderRadius)
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
      'base.buttonText': function (n, o) {
        this.workarea.html = document.querySelector('#preview').innerHTML;
      },
      //基础
      'animationStyles.transitionDuration': function (n, o) {
        this.$utils.getClassValue('.eg_button').style.transitionDuration = n + 's';
        this.$utils.getClassValue('.eg_button:hover').style.transitionDuration = n + 's';
        this.$utils.getClassValue('.eg_button:hover').style.animationDuration = n + 's';

        this.workarea.css = this.$utils.cssFormat(this.$utils.getClassValue('.eg_button').cssText + this.$utils
          .getClassValue('.eg_button:hover').cssText)

      },
      'animationStyles.animation': function (n, o) {
        this.$utils.getClassValue('.eg_button:hover').style.animationName = n;
        this.$utils.getClassValue('.eg_button:hover').style.animationDuration = this.$utils.getClassValue(
          '.eg_button').style.transitionDuration;

        this.workarea.css = this.$utils.cssFormat(this.$utils.getClassValue('.eg_button').cssText + this.$utils
          .getClassValue('.eg_button:hover').cssText)
      },
      'styles.width': function (n, o) {
        this.$utils.getClassValue('.eg_button').style.width = n + 'px';

        this.workarea.css = this.$utils.cssFormat(this.$utils.getClassValue('.eg_button').cssText + this.$utils
          .getClassValue('.eg_button:hover').cssText)
      },
      'styles.height': function (n, o) {
        this.$utils.getClassValue('.eg_button').style.height = n + 'px';
        this.$utils.getClassValue('.eg_button').style.lineHeight = n + 'px';

        this.workarea.css = this.$utils.cssFormat(this.$utils.getClassValue('.eg_button').cssText + this.$utils
          .getClassValue('.eg_button:hover').cssText)
      },
      'styles.color': function (n, o) {
        this.$utils.getClassValue('.eg_button').style.color = n;

        this.workarea.css = this.$utils.cssFormat(this.$utils.getClassValue('.eg_button').cssText + this.$utils
          .getClassValue('.eg_button:hover').cssText)
      },
      'styles.fontSize': function (n, o) {
        this.$utils.getClassValue('.eg_button').style.fontSize = n + 'px';

        this.workarea.css = this.$utils.cssFormat(this.$utils.getClassValue('.eg_button').cssText + this.$utils
          .getClassValue('.eg_button:hover').cssText)
      },
      'style.backgroundColor': function (n, o) {
        this.$utils.getClassValue('.eg_button').style.backgroundColor = n;

        this.workarea.css = this.$utils.cssFormat(this.$utils.getClassValue('.eg_button').cssText + this.$utils
          .getClassValue('.eg_button:hover').cssText)
      },
      'styles.borderWidth': function (n, o) {
        this.$utils.getClassValue('.eg_button').style.borderWidth = n + 'px';
        this.$utils.getClassValue('.eg_button').style.lineHeight = (parseInt(this.$utils.getClassValue('.eg_button')
          .style.height) - n * 2) + 'px';

        this.workarea.css = this.$utils.cssFormat(this.$utils.getClassValue('.eg_button').cssText + this.$utils
          .getClassValue('.eg_button:hover').cssText)
      },
      'styles.borderStyle': function (n, o) {
        this.$utils.getClassValue('.eg_button').style.borderStyle = n;

        this.workarea.css = this.$utils.cssFormat(this.$utils.getClassValue('.eg_button').cssText + this.$utils
          .getClassValue('.eg_button:hover').cssText)
      },
      'styles.borderColor': function (n, o) {
        this.$utils.getClassValue('.eg_button').style.borderColor = n;

        this.workarea.css = this.$utils.cssFormat(this.$utils.getClassValue('.eg_button').cssText + this.$utils
          .getClassValue('.eg_button:hover').cssText)
      },
      'styles.borderRadius': function (n, o) {
        this.$utils.getClassValue('.eg_button').style.borderRadius = n + 'px';

        this.workarea.css = this.$utils.cssFormat(this.$utils.getClassValue('.eg_button').cssText + this.$utils
          .getClassValue('.eg_button:hover').cssText)
      },
      'interactionStyles.width': function (n, o) {
        this.$utils.getClassValue('.eg_button:hover').style.width = n + 'px';

        this.workarea.css = this.$utils.cssFormat(this.$utils.getClassValue('.eg_button').cssText + this.$utils
          .getClassValue('.eg_button:hover').cssText)
      },
      'interactionStyles.height': function (n, o) {
        this.$utils.getClassValue('.eg_button:hover').style.height = n + 'px';
        this.$utils.getClassValue('.eg_button:hover').style.lineHeight = n + 'px';

        this.workarea.css = this.$utils.cssFormat(this.$utils.getClassValue('.eg_button').cssText + this.$utils
          .getClassValue('.eg_button:hover').cssText)
      },
      //交互
      'interactionStyles.color': function (n, o) {
        this.$utils.getClassValue('.eg_button:hover').style.color = n;

        this.workarea.css = this.$utils.cssFormat(this.$utils.getClassValue('.eg_button').cssText + this.$utils
          .getClassValue('.eg_button:hover').cssText)
      },
      'interactionStyles.fontSize': function (n, o) {
        this.$utils.getClassValue('.eg_button:hover').style.fontSize = n + 'px';

        this.workarea.css = this.$utils.cssFormat(this.$utils.getClassValue('.eg_button').cssText + this.$utils
          .getClassValue('.eg_button:hover').cssText)
      },
      'interactionStyles.backgroundColor': function (n, o) {
        this.$utils.getClassValue('.eg_button:hover').style.backgroundColor = n;

        this.workarea.css = this.$utils.cssFormat(this.$utils.getClassValue('.eg_button').cssText + this.$utils
          .getClassValue('.eg_button:hover').cssText)
      },
      'interactionStyles.borderWidth': function (n, o) {
        this.$utils.getClassValue('.eg_button:hover').style.borderWidth = n + 'px';
        this.$utils.getClassValue('.eg_button:hover').style.lineHeight = (parseInt(this.$utils.getClassValue(
            '.eg_button:hover')
          .style.height) - n * 2) + 'px';

        this.workarea.css = this.$utils.cssFormat(this.$utils.getClassValue('.eg_button').cssText + this.$utils
          .getClassValue('.eg_button:hover').cssText)
      },
      'interactionStyles.borderStyle': function (n, o) {
        this.$utils.getClassValue('.eg_button:hover').style.borderStyle = n;

        this.workarea.css = this.$utils.cssFormat(this.$utils.getClassValue('.eg_button').cssText + this.$utils
          .getClassValue('.eg_button:hover').cssText)
      },
      'interactionStyles.borderColor': function (n, o) {
        this.$utils.getClassValue('.eg_button:hover').style.borderColor = n;

        this.workarea.css = this.$utils.cssFormat(this.$utils.getClassValue('.eg_button').cssText + this.$utils
          .getClassValue('.eg_button:hover').cssText)
      },
      'interactionStyles.borderRadius': function (n, o) {
        this.$utils.getClassValue('.eg_button:hover').style.borderRadius = n + 'px';

        this.workarea.css = this.$utils.cssFormat(this.$utils.getClassValue('.eg_button').cssText + this.$utils
          .getClassValue('.eg_button:hover').cssText)
      }
    },
    methods: {
      toHtml(tab, event) {
        this.workarea.html = document.querySelector('#preview').innerHTML;
      }
    },
    mounted() {
      console.log(this.$utils.getClassValue('.eg_button:hover').style);
    }
  }
</script>