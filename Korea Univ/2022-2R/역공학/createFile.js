var createFile = Module.findExportByName("kernel32.dll", "CreateFileW");

Interceptor.attach(createFile, {
    onEnter: function(args)
    {
        // HANDLE CreateFile(
        //     [in]           LPCSTR                lpFileName,
        //     [in]           DWORD                 dwDesiredAccess,
        //     [in]           DWORD                 dwShareMode,
        //     [in, optional] LPSECURITY_ATTRIBUTES lpSecurityAttributes,
        //     [in]           DWORD                 dwCreationDisposition,
        //     [in]           DWORD                 dwFlagsAndAttributes,
        //     [in, optional] HANDLE                hTemplateFile
        //   );

        console.log("=== CreateFile's lpFileName ===");
        console.log(Memory.readUtf16String(args[0]));

        console.log("=== CreateFile's dwDesiredAccess ===");
        console.log(args[1]);
        if (args[1] == 0x10000000){
            console.log("GENERIC_ALL");
        }
        else if (args[1] == 0x20000000){
            console.log("GENERIC_EXECUTE");
        }
        else if (args[1] == 0x40000000){
            console.log("GENERIC_READ");
        }
        else if (args[1] == 0x80000000){
            console.log("GENERIC_WRITE");
        }
        else if (args[1] == 0x00010000){
            console.log("DELETE");
        }
        else if (args[1] == 0x00020000){
            console.log("READ_CONTROL");
        }
        else if (args[1] == 0x00040000){
            console.log("WRITE_DAC");
        }
        else if (args[1] == 0x00080000){
            console.log("WRITE_OWNER");
        }
        else if (args[1] == 0x00100000){
            console.log("SYNCHRONIZE");
        }
        

        console.log("=== CreateFile's dwShareMode ===");
        console.log(args[2]);
        if (args[2] == 0x00000000){
            console.log("0");
        }
        else if (args[2] == 0x00000001){
            console.log("FILE_SHARE_READ");
        }
        else if (args[2] == 0x00000002){
            console.log("FILE_SHARE_WRITE");
        }
        else if (args[2] == 0x00000004){
            console.log("FILE_SHARE_DELETE");
        }

        console.log("=== CreateFile's lpSecurityAttributes ===");
        console.log(args[3]);

        console.log("=== CreateFile's dwCreationDisposition ===");
        console.log(args[4]);
        if (args[4].and(0x1) != 0x0){
            console.log("CREATE_NEW");
        }
        else if (args[4].and(0x2) != 0x0){
            console.log("CREATE_ALWAYS");
        }
        else if (args[4].and(0x3) != 0x0){
            console.log("OPEN_EXISTING");
        }
        else if (args[4].and(0x4) != 0x0){
            console.log("OPEN_ALWAYS");
        }
        else if (args[4].and(0x5) != 0x0){
            console.log("TRUNCATE_EXISTING");
        }

        console.log("=== CreateFile's dwFlagsAndAttributes ===");
        console.log(args[5]);
        if (args[5].and(0x1) != 0x0){
            console.log("FILE_ATTRIBUTE_READONLY");
        }
        else if (args[5].and(0x2) != 0x0){
            console.log("FILE_ATTRIBUTE_HIDDEN");
        }
        else if (args[5].and(0x4) != 0x0){
            console.log("FILE_ATTRIBUTE_SYSTEM");
        }
        else if (args[5].and(0x32) != 0x0){
            console.log("FILE_ATTRIBUTE_ARCHIVE");
        }
        else if (args[5].and(0x128) != 0x0){
            console.log("FILE_ATTRIBUTE_NORMAL");
        }
        else if (args[5].and(0x256) != 0x0){
            console.log("FILE_ATTRIBUTE_TEMPORARY");
        }
        else if (args[5].and(0x4096) != 0x0){
            console.log("FILE_ATTRIBUTE_OFFLINE");
        }
        else if (args[5].and(0x16384) != 0x0){
            console.log("FILE_ATTRIBUTE_ENCRYPTED");
        }

        console.log("=== CreateFile's hTemplateFile ===");
        console.log(args[6]);
        console.log("")
    },
    onLeave: function(retval) 
    {
    }
});