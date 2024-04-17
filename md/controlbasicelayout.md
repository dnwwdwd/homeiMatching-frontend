        <div class="right">
          <div class="up">
            <div class="data_panel">
              <h3>棚内数据</h3>
              <!--这里的内容需要填充-->
              <div class="data">
                <div class="sun_span">
                  <div class="model_div">
                    <label>Lux</label>
                    <h3 style="float:left; font-size: 25px; margin-left:78px;margin-top: 0px">{{ lightValue }}</h3>
                    <br>

                  </div>
                  <a-input-number
                      v-model:value="lightValue"
                      :min="0"
                      :max="10000"
                      :step="1"
                      style="margin-top: 30px; background-color: #0F6A9C; border: #0F6A9C"
                  />


                </div>
                <div class="temp_span">
                  <div class="model_div">
                    <label>℃</label>
                    <h3 style="float:left; margin-left:115px; margin-top: 0px">{{ tempValue }}</h3>
                    <br>
                    <a-input-number
                        v-model:value="tempValue"
                        :min="0"
                        :max="10000"
                        :step="0.1"
                        style="margin-top: 30px; background-color: #0F6A9C; border: #0F6A9C"
                    />
                  </div>
                </div>
                <div class="wet_span">
                  <div class="model_div">
                    <label>%</label>
                    <h3 style="float:left; margin-left:115px; margin-top: 0px">{{ moistureValue }}</h3>
                    <br>
                    <a-input-number
                        v-model:value="moistureValue"
                        :min="0"
                        :max="10000"
                        :step="0.1"
                        style="margin-top: 30px; background-color: #0F6A9C; border: #0F6A9C"
                    />
                  </div>
                </div>
                <div class="o2_span">
                  <div class="model_div">
                    <label>%</label>
                    <h3 style="float:left; margin-left:115px;margin-top:0">{{ o2Value }}</h3>
                    <br>
                    <a-input-number
                        v-model:value="o2Value"
                        :min="0"
                        :max="10000"
                        :step="0.1"
                        style="margin-top: 30px; background-color: #0F6A9C; border: #0F6A9C"
                    />
                  </div>
                </div>
                <div class="co2_span">
                  <div class="model_div">
                    <label>%</label>
                    <h3 style="float:left; margin-left:115px;margin-top:0">{{ co2Value }}</h3>
                    <br>
                    <a-input-number
                        v-model:value="co2Value"
                        :min="0"
                        :max="10000"
                        :step="0.1"
                        style="margin-top: 30px; background-color: #0F6A9C; border: #0F6A9C"
                    />
                  </div>
                </div>
              </div>

            </div>
            <!--这里的button需要改-->
            <div class="equip_panel">
              <h3>大棚设备</h3>
              <div class="equip">
                <div class="zheyanglian_span">
                  <a-switch class="custom-switch" @click="zheyanglianIsClicked" v-model:checked="zheyanglianState.checked" checked-children="开" un-checked-children="关"/>
                </div>
                <div class="shuilian_span">
                  <a-switch class="custom-switch" @click="shuilianIsClicked" v-model:checked="shuilianState.checked" checked-children="开" un-checked-children="关"/>
                </div>
                <div class="juanpeng_span">
                  <a-switch class="custom-switch" @click="juanlianmenIsClicked" v-model:checked="juanlianmenState.checked" checked-children="开" un-checked-children="关"/>
                </div>
                <div class="wind1_span">
                  <a-switch class="custom-switch" @click="fengji1IsClicked" v-model:checked="fengji1State.checked" checked-children="开" un-checked-children="关"/>
                </div>
                <div class="wind2_span">
                  <a-switch class="custom-switch" @click="fengji2IsClicked" v-model:checked="fengji2State.checked" checked-children="开" un-checked-children="关"/>
                </div>
                <div class="wind3_span">
                  <a-switch class="custom-switch" @click="fengji3IsClicked" v-model:checked="fengji3State.checked" checked-children="开" un-checked-children="关"/>
                </div>
                <!--end-->
              </div>

            </div>

          </div>

          <br>
          <div class="down">
            <div class="tendency_panel">
              <h3>土壤状况趋势</h3>
              <soil-trend-chart1 v-if="houseId===1"/>
              <soil-trend-chart2 v-if="houseId===2"/>
              <soil-trend-chart3 v-if="houseId===3"/>
              <soil-trend-chart4 v-if="houseId===4"/>
            </div>

            <div class="star_equip">
              <h3>启动装置</h3>

              <div style="display: flex; flex-direction: row; margin-left: 5px">
                <div style="display: flex; flex-direction: column; margin-left: 80px; margin-top: 70px">
                  <img class="custom-icon" src="../icon/jiaoshui.png" style="margin-top: 7px" width="30">

                  <img class="custom-icon" src="../icon/杀虫剂.png" width="30" style="margin-top: 70px">

                  <img class="custom-icon" src="../icon/施肥.png" width="35" style="margin-top: 55px">
                </div>

                <div style="display: flex; flex-direction: column; margin-left: 8px;margin-top: 82px">
                  <span class="custom-span" style="font-size: 20px; color: white; margin-bottom: 74px; margin-top: 2px">浇水</span>
                  <span class="custom-span" style="font-size: 20px; color: white; margin-bottom: 68px">杀虫</span>
                  <span class="custom-span" style="font-size: 20px; color: white; margin-bottom: 68px">施肥</span>
                </div>

                <div style="display: flex; flex-direction: column; margin-left: 20px; margin-top: 70px">
                  <a-switch class="custom-switch-bottom" @click="jiaoshuiIsClicked" v-model:checked="jiaoshuiState.checked" checked-children="开" un-checked-children="关"
                            style="margin-top: 10px"/>
                  <a-switch class="custom-switch-bottom" @click="shachongIsClicked" v-model:checked="shachongState.checked" checked-children="开" un-checked-children="关"/>
                  <a-switch class="custom-switch-bottom" @click="shifeiIsClicked" v-model:checked="shifeiState.checked" checked-children="开" un-checked-children="关"/>
                </div>
              </div>

            </div>

          </div>

        </div>