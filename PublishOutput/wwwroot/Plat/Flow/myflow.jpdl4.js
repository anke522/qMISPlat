(function($){
var myflow = $.myflow;

$.extend(true,myflow.config.rect,{
	attr : {
	r : 8,
	fill : '#F6F7FF',
	stroke : '#03689A',
	"stroke-width" : 2
},margin:0
});

$.extend(true,myflow.config.props.props,{
	name : {name:'name', label:'名称', value:'新建流程', editor:function(){return new myflow.editors.inputEditor();}},
	key : {name:'key', label:'标识', value:'', editor:function(){return new myflow.editors.inputEditor();}},
	desc : {name:'desc', label:'描述', value:'', editor:function(){return new myflow.editors.inputEditor();}}
});


$.extend(true,myflow.config.tools.states,{
	start : {
	    showType: 'imageStart',
				type : 'start',
				name : {text:'<<start>>'},
				text : {text:'开始'},
                img: { src: '../../Style/Default/Flow/img/Start.png',width : 48, height:48},
				attr : {width:50 ,heigth:50 },
				props : {
					text: {name:'text',label: '显示', value:'', editor: function(){return new myflow.editors.textEditor();}, value:'开始'},
					temp1: {name:'temp1', label : '文本', value:'', editor: function(){return new myflow.editors.inputEditor();}},
					temp2: {name:'temp2', label : '选择', value:'', editor: function(){return new myflow.editors.selectEditor([{name:'aaa',value:1},{name:'bbb',value:2}]);}}
				}},
	end: {
	    showType: 'image', type: 'end',
				name : {text:'<<end>>'},
				text : {text:'结束'},
                img: { src: '../../Style/Default/Flow/img/End.png',width : 48, height:48},
				attr : {width:50 ,heigth:50 },
				props : {
					text: {name:'text',label: '显示', value:'', editor: function(){return new myflow.editors.textEditor();}, value:'结束'},
					temp1: {name:'temp1', label : '文本', value:'', editor: function(){return new myflow.editors.inputEditor();}},
					temp2: {name:'temp2', label : '选择', value:'', editor: function(){return new myflow.editors.selectEditor([{name:'aaa',value:1},{name:'bbb',value:2}]);}}
				}},
			'end-cancel' : {showType: 'image',type : 'end-cancel',
				name : {text:'<<end-cancel>>'},
				text : {text:'取消'},
				img : {src : 'img/48/end_event_cancel.png',width : 48, height:48},
				attr : {width:50 ,heigth:50 },
				props : {
					text: {name:'text',label: '显示', value:'', editor: function(){return new myflow.editors.textEditor();}, value:'取消'},
					temp1: {name:'temp1', label : '文本', value:'', editor: function(){return new myflow.editors.inputEditor();}},
					temp2: {name:'temp2', label : '选择', value:'', editor: function(){return new myflow.editors.selectEditor([{name:'aaa',value:1},{name:'bbb',value:2}]);}}
				}},
			'end-error' : {showType: 'image',type : 'end-error',
				name : {text:'<<end-error>>'},
				text : {text:'错误'},
				img : {src : 'img/48/end_event_error.png',width : 48, height:48},
				attr : {width:50 ,heigth:50 },
				props : {
					text: {name:'text',label: '显示', value:'', editor: function(){return new myflow.editors.textEditor();}, value:'错误'},
					temp1: {name:'temp1', label : '文本', value:'', editor: function(){return new myflow.editors.inputEditor();}},
					temp2: {name:'temp2', label : '选择', value:'', editor: function(){return new myflow.editors.selectEditor([{name:'aaa',value:1},{name:'bbb',value:2}]);}}
				}},
            state: {
                showType: 'textcirculation',type : 'state',
				name : {text:'<<state>>'},
				text : {text:'传阅'},
				img : {src : 'img/48/task_pass.png',width : 48, height:48},
				props : {
					text: {name:'text',label: '显示', value:'', editor: function(){return new myflow.editors.textEditor();}, value:'状态'},
					temp1: {name:'temp1', label : '文本', value:'', editor: function(){return new myflow.editors.inputEditor();}},
					temp2: {name:'temp2', label : '选择', value:'', editor: function(){return new myflow.editors.selectEditor([{name:'aaa',value:1},{name:'bbb',value:2}]);}}
				}},
            fork: {
                showType: 'image&text',type : 'fork',
				name : {text:'<<fork>>'},
				text : {text:'会签'},
                img: { src: '../../Style/Default/Flow/img/Meet.png', width: 60, height: 60},
				attr : {width:50 ,heigth:50 },
				props : {
					text: {name:'text', label: '显示', value:'', editor: function(){return new myflow.editors.textEditor();}, value:'分支'},
					temp1: {name:'temp1', label: '文本', value:'', editor: function(){return new myflow.editors.inputEditor();}},
					temp2: {name:'temp2', label : '选择', value:'', editor: function(){return new myflow.editors.selectEditor('select.json');}}
                }
            },

            join: {
                showType: 'image&text',type : 'join',
				name : {text:'<<join>>'},
				text : {text:'合并'},
                img: { src: '../../Style/Default/Flow/img/Meet.png', width: 60, height: 60},
				attr : {width:50 ,heigth:50 },
				props : {
					text: {name:'text', label: '显示', value:'', editor: function(){return new myflow.editors.textEditor();}, value:'合并'},
					temp1: {name:'temp1', label: '文本', value:'', editor: function(){return new myflow.editors.inputEditor();}},
					temp2: {name:'temp2', label : '选择', value:'', editor: function(){return new myflow.editors.selectEditor('select.json');}}
				}},
			task : {showType: 'text',type : 'task',
				name : {text:'<<task>>'},
				text : {text:'普通'},
				img : {src : 'img/48/task_empty.png',width :48, height:48},
				props : {
					text: {name:'text', label: '显示', value:'', editor: function(){return new myflow.editors.textEditor();}, value:'任务'},
					assignee: {name:'assignee', label: '用户', value:'', editor: function(){return new myflow.editors.selectEditor('../js/myflow/select.json');}},
					desc: {name:'desc', label : '描述', value:'', editor: function(){return new myflow.editors.inputEditor();}}
				}},
			decision : {showType: 'image',type : 'decision',
                name : {text:'<<decision>>'},
                text : {text:'决定'},
                img : {src : 'img/48/gateway_parallel.png',width :48, height:48},
                attr : {width:50 ,heigth:50 },
                props : {
                    text: {name:'text', label: '显示', value:'', editor: function(){return new myflow.editors.textEditor();}, value:'决定'},
                    expr: {name:'expr', label : '表达式', value:'', editor: function(){return new myflow.editors.inputEditor();}},
                    desc: {name:'desc', label : '描述', value:'', editor: function(){return new myflow.editors.inputEditor();}}
                }}
});
})(jQuery);