//-----------------
// KU-DFRC
//   jungheum.park
//-----------------

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

var writeFile = Module.findExportByName("kernel32.dll", "WriteFile");

Interceptor.attach(writeFile, {
    onEnter: function(args)
    {
        // BOOL WriteFile(
        //     [in]                HANDLE       hFile,
        //     [in]                LPCVOID      lpBuffer,
        //     [in]                DWORD        nNumberOfBytesToWrite,
        //     [out, optional]     LPDWORD      lpNumberOfBytesWritten,
        //     [in, out, optional] LPOVERLAPPED lpOverlapped
        //   );
        
        console.log("=== WriteFile's lpBuffer ===")
        console.log("Buffer dump:\n" + hexdump(args[1], { length: 128, ansi: true }));
        //console.log(Memory.readUtf8String(args[1]));

        //Memory.writeAnsiString(args[1],"manipulated contents");
        console.log("")
    },
    onLeave: function(retval) 
    {
    }
});