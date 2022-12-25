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