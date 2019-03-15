1.boostrap中的图标相当于字体 改变样式后不会失帧

2.boostrap组件-怪异的属性

role 标识谱图标签使之语义化

aria-label 配合读拼软件

tablndex 设置tab键在空键中移动，焦点的移动顺序

以上对于有葬爱人士

3.boostrape 下拉框

外面div class="drapdown"  class="btn-group"

里面button data-toggle="dropdown"

里面ul class="dropdown-menu"

4.按钮组

.btn-toolbar

.btn-group

.btn-group-lg

5.导航

nav nav-tabs 

nav nav-pills nav-stacked(垂直)

6.分页

1.<ul class="pagination">

2.&laquo;

3.&raquo;

7.翻页

1.<ul class="pager">

2.<li class="previous>  

3.<li class="next">

5.&larr;

6.&rarr;

8.进度条

<div class="progress">
<div class="progress-bar progress-bar-danger" style="width:60%;">60%</div>
</div>

1.progress

2.progress-bar

3.progress-bar-striped

9.列表

<ul class="list-group">
				<li class="list-group-item">
					this is a list  
					<span class="badge">33</span>
				</li>
			</ul>

1.list-group

2.list-group-item

3.badge : 数字

10.面板

<div class="panel panel-default">
				<div class="panel-heading">
					弹出层
				</div>
				<div class="panel-body">
					这是面板的具体内容
				</div>
				<div class="panel-footer">
					脚注
				</div>
			</div>

1.panel panel-default

2.panel-heading  panel-body  panel-footer

11.模态框

<button class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
				弹窗
			</button>
			

			<div class="modal fade" id = "myModal">
				<div class="modal-dialog modal-sm">
					<div class="modal-content">
						<div class="modal-header">
							<button class="close" data-dismiss="modal">
								<span>&times;</span></span>
							</button>
							<h4 class="modal-title">标题</h4>
						</div>
					<div class="modal-body">
						慕课网
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
						<button type="button" class="btn btn-primary" data-dismiss="modal">保存</button>
					</div>
					
					</div>
				</div>
			</div>
data-toggle="modal" toggle自动设置元素是以modal形式显示还是隐藏 

data-target="id" data-target指事件的目标 

data-dismiss="modal"它被用于关闭模态窗口。

fade 当模态框被切换时，它会引起内容淡入淡出。 

modal-dialog modal-sm modal-lg通过为 `.modal-dialog` 增加一个样式调整类实现。 

&times;

class="close"，close 是一个 CSS class，用于为模态窗口的关闭按钮设置样式。

modal-content modal-header modal-body model-footer