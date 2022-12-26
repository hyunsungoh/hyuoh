var createFile = Module.findExportByName("kernel32.dll", "CreateProcessA");

Interceptor.attach(createProcess, {
    onEnter: function(args)
    {
        // BOOL CreateProcessA(
        //     [in, optional]      LPCSTR                lpApplicationName,
        //     [in, out, optional] LPSTR                 lpCommandLine,
        //     [in, optional]      LPSECURITY_ATTRIBUTES lpProcessAttributes,
        //     [in, optional]      LPSECURITY_ATTRIBUTES lpThreadAttributes,
        //     [in]                BOOL                  bInheritHandles,
        //     [in]                DWORD                 dwCreationFlags,
        //     [in, optional]      LPVOID                lpEnvironment,
        //     [in, optional]      LPCSTR                lpCurrentDirectory,
        //     [in]                LPSTARTUPINFOA        lpStartupInfo,
        //     [out]               LPPROCESS_INFORMATION lpProcessInformation
        //   );

        console.log("=== CreateFile's lpApplicationName ===");
        console.log(Memory.readUtf16String(args[0]));

        console.log("=== CreateProcess's lpCommandLine ===");
        console.log(Memory.readCString(args[1]));
        console.log(args[1]);
        
        console.log("=== CreateProcess's lpProcessAttributes ===");
        console.log(args[2]);

        console.log("=== CreateProcess's lpThreadAttributes ===");
        console.log(args[3]);

        console.log("=== CreateProcess's bInheritHandles ===");
        console.log(args[4]);
        if (args[4].and(0x0) != 0x0){
            console.log("False");
        }
        else if (args[4].and(0x1) != 0x0){
            console.log("True");
        }

        console.log("=== CreateProcess's dwCreationFlags ===");
        console.log(args[5]);
        if (args[5] == 0x01000000){
            console.log("CREATE_BREAKAWAY_FROM_JOB");
        }
        else if (args[5] == 0x04000000){
            console.log("CREATE_DEFAULT_ERRORMODE");
        }
        else if (args[5] == 0x00000010){
            console.log("CREATE_NEW_CONSOLE");
        }

        else if (args[5] == 0x00000200){
            console.log("CREATE_NEW_PROCESS_GROUP");
        }

        else if (args[5] == 0x08000000){
            console.log("CREATE_NO_WINDOW");
        }

        else if (args[5] == 0x00040000){
            console.log("CREATE_PROTECTED_PROCESS");
        }

        else if (args[5] == 0x02000000){
            console.log("CREATE_PRESERVE_CODE_AUTHZ_LEVEL");
        }

        else if (args[5] == 0x00400000){
            console.log("CREATE_SECURE_PROCESS");
        }

        else if (args[5] == 0x00000800){
            console.log("CREATE_SEPARATE_WOW_VDM");
        }

        else if (args[5] == 0x00001000){
            console.log("CREATE_SHARED_WOW_VDM");
        }

        else if (args[5] == 0x00000004){
            console.log("CREATE_SUSPENDED");
        }

        else if (args[5] == 0x00000002){
            console.log("DEBUG_ONLY_THIS_PROCESS");
        }

        else if (args[5] == 0x00000001){
            console.log("DEBUG_PROCESS");
        }

        else if (args[5] == 0x00000008){
            console.log("DETACHED_PROCESS");
        }

        else if (args[5] == 0x00080000){
            console.log("EXTENDED_STARTUPINFO_PRESENT");
        }

        else if (args[5] == 0x00010000){
            console.log("INHERIT_PARENT_AFFINITY");
        }

        console.log("=== CreateProcess's lpEnvironment ===");
        console.log(Memory.readUtf16String(args[6]));

        console.log("=== CreateProcess's lpCurrentDirectory ===");
        console.log(args[7]);

        console.log("=== CreateProcess's lpStartupInfo ===");
        console.log("Buffer dump:\n" + hexdump(args[8], { length: 128, ansi: true }));

        console.log("=== CreateProcess's lpProcessInformation ===");
        console.log("Buffer dump:\n" + hexdump(args[9], { length: 128, ansi: true }));
        console.log("")
    },
    onLeave: function(retval) 
    {
    }
});