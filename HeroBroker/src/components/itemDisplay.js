 <div >Number of mods: {items.modifiers}</div>
{Array.isArray(items.mods) && items.mods.length > 0 ? (
          items.mods.map((mod, index) => (
            <div key={index}>
              <p>
                <strong>Mod Name:</strong> {mod.modName}
              </p>
              <p>
                <strong>Mod Value:</strong> {mod.modValue}
              </p>
            </div>
          ))
        ) : (
          <p>no mods</p>
        )}