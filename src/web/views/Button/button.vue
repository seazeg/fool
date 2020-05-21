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
      <div class="control_group_title">基础属性：</div>
      <div class="control_group">
        <div class="box">
          <span class="field">buttonText</span>
          <p>
            <el-input v-model="base.buttonText" placeholder="请输入名称"></el-input>
          </p>
        </div>
        <div class="box">
          <span class="field">buttonObj</span>
          <p>
            <el-input v-model="base.buttonObj" placeholder="请输入名称"></el-input>
          </p>
        </div>
      </div>
      <div class="control_group_title">初始样式：</div>
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
            <el-slider v-model="styles.height" :min="80" :max="500" show-input></el-slider>
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
            <span class="field">字体色（color）</span>
            <p class="group">
              <el-color-picker v-model="styles.color" show-alpha></el-color-picker>
              <el-input v-model="styles.color" placeholder="请输入色号"></el-input>
            </p>
          </div>
          <div class="right">
            <span class="field">背景色（background）</span>
            <p class="group">
              <el-color-picker v-model="styles.backgroundColor" show-alpha></el-color-picker>
              <el-input v-model="styles.backgroundColor" placeholder="请输入色号"></el-input>
            </p>
          </div>
        </div>
        <div class="box">
          <span class="field">borderWidth</span>
          <p>
            <el-slider v-model="styles.borderWidth" :max="10" show-input></el-slider>
          </p>
        </div>
        <div class="box">
          <div class="left">
            <span class="field">borderStyle</span>
            <p>
              <el-select v-model="styles.borderStyle" placeholder="请选择" style="width:100%">
                <el-option v-for="item in borderOpt" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </p>
          </div>
          <div class="right">
            <span class="field">borderColor</span>
            <p class="group">
              <el-color-picker v-model="styles.borderColor" show-alpha></el-color-picker>
              <el-input v-model="styles.borderColor" placeholder="请输入色号"></el-input>
            </p>
          </div>
        </div>
        <div class="box">
          <span class="field">borderRadius</span>
          <p>
            <el-slider v-model="styles.borderRadius" :max="50" show-input></el-slider>
          </p>
        </div>
      </div>
      <!-- <div class="control_group_title">Hover样式：</div>
      <div class="control_group">
        <div class="box">
          <div class="left">
            <span class="field">hoverColor</span>
            <p class="group">
              <el-color-picker v-model="toolsParam.hoverColor" show-alpha></el-color-picker>
              <el-input v-model="toolsParam.hoverColor" placeholder="请输入色号"></el-input>
            </p>
          </div>
          <div class="right">
            <span class="field">hoverBackground</span>
            <p class="group">
              <el-color-picker v-model="toolsParam.hoverBackground" show-alpha></el-color-picker>
              <el-input v-model="toolsParam.hoverBackground" placeholder="请输入色号"></el-input>
            </p>
          </div>
        </div>
        <div class="box">
          <span class="field">hoverBorderWidth</span>
          <p>
            <el-slider v-model="toolsParam.hoverBorderWidth" :max="10" show-input></el-slider>
          </p>
        </div>
        <div class="box">
          <div class="left">
            <span class="field">hoverBorderStyle</span>
            <p>
              <el-select v-model="toolsParam.hoverBorderStyle" placeholder="请选择" style="width:100%">
                <el-option v-for="item in borderOpt" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </p>
          </div>
          <div class="right">
            <span class="field">hoverBorderColor</span>
            <p class="group">
              <el-color-picker v-model="toolsParam.hoverBorderColor" show-alpha></el-color-picker>
              <el-input v-model="toolsParam.hoverBorderColor" placeholder="请输入色号"></el-input>
            </p>
          </div>
        </div>

      </div> -->
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        base: {
          buttonText: 'Button',
          buttonObj: 'eg_button',
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
          hoverColor: '#111',
          hoverBgColor: '#fff',
          hoverBorderWidth: 2,
          hoverBorderStyle: 'solid',
          hoverBorderColor: '#111',
        },
        senior: {
          texture: ''
        },
        tabChecked: 'preview',
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
        this.$utils.getClassValue('.eg_button').style.lineHeight = (parseInt(this.$utils.getClassValue('.eg_button').style.height)-n*2) + 'px';
      },
      'styles.borderStyle': function (n, o) {
        this.$utils.getClassValue('.eg_button').style.borderStyle = n;
        console.log( this.$utils.getClassValue('.eg_button').style.borderStyle);
      },
      'styles.borderColor': function (n, o) {
        this.$utils.getClassValue('.eg_button').style.borderColor = n;
      },
      'styles.borderRadius': function (n, o) {
        this.$utils.getClassValue('.eg_button').style.borderRadius = n + 'px';
      }
    },
    computed: {

    },
    mounted() {
      console.log(this.$utils.getClassValue('.eg_button').style)
    }
  }
</script>