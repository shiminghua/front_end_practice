
# 解决Windows中无法删除路径太长目录及文件

    在cmd命令行窗口中输入
	robocopy empty_dir will_delete_dir /purge
	
	empty_dir 新建的空白目录
	will_delete_dir 要删除的目录
	注意中间的空格
    
    
    robocopy D:\10Study\temp D:\10Study\test\node_modules /purge

    purge  清除