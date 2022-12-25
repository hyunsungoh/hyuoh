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

        console.log("=== CreateFile's dwCreationDisposition ===");
        console.log(args[4]);

        console.log("=== CreateFile's dwFlagsAndAttributes ===");
        console.log(args[5]);
        console.log("")
    },
    onLeave: function(retval) 
    {
    }
});