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
        
        console.log("=== WriteFile's hFile ===");
        console.log(args[0]);

        console.log("=== WriteFile's lpBuffer ===")
        console.log("Buffer dump:\n" + hexdump(args[1], { length: 128, ansi: true }));
        //console.log(Memory.readUtf8String(args[1]));

        console.log(Memory.readUtf8String(args[1]));
        Memory.writeAnsiString(args[1],"manipulated contents");
        
        console.log("=== WriteFile's nNumberOfBytesToWrite ===");
        console.log(args[2]);

        console.log("=== WriteFile's lpNumberOfBytesWritten ===");
        console.log(args[3]);

        console.log("=== WriteFile's lpOverlapped ===");
        console.log(args[4]);
        console.log("")
    },
    onLeave: function(retval) 
    {
    }
});