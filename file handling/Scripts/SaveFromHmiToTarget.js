var TcHmi;
(function (TcHmi) {
    let Functions;
    (function (Functions) {
        var fe;
        let file_handling;
        (function (file_handling) {
            function SaveFromHmiToTarget(ctx, Content, Name, Dir, Ext) {
                if (!fe)
                    fe = new TcHmi.Controls.Beckhoff.TcHmiFileExplorerComponents.FileUploader();
                //const path = Ext ? `${Name}.${Ext}` : Name;
                var my_file = new File([Content], Name);
                fe.queue(file_handling.BuildPath(Name, Dir, Ext), my_file, ok => ctx.success(true)).catch(err => { ctx.error(err); console.error(err); });
                //fe.queue(encodeURI(`/${Dir}/${path}`), my_file, ok => ctx.success(true)).catch(err => { ctx.error(err); console.error(err); });
            }
            file_handling.SaveFromHmiToTarget = SaveFromHmiToTarget;
        })(file_handling = Functions.file_handling || (Functions.file_handling = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi || (TcHmi = {}));
TcHmi.Functions.registerFunctionEx('SaveFromHmiToTarget', 'TcHmi.Functions.file_handling', TcHmi.Functions.file_handling.SaveFromHmiToTarget);
//# sourceMappingURL=SaveFromHmiToTarget.js.map