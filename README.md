```
tail -n 40 file1 > file2 && head -n 10 file2 > file3 | grep коко file2 | sed 's/коко/куку/g' | head -n 3 > file0 && cat file0 >> file3 && cat file3 > file0 && uniq file0 -c && uniq file0 > file3 $$ rm file0
```
